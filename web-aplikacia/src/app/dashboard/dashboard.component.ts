import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student, CLASSES, FIELDS_OF_STUDY, GENDERS } from '../models/student.types';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText = '';
  filteredStudents: Student[] = [];
  isAddingOrEditing = false;
  editingStudent: Student | null = null;
  currentStudent: Student = this.getEmptyStudent();
  
  classes = CLASSES;
  fields = FIELDS_OF_STUDY;
  genders = GENDERS;

  constructor(
    private studentService: StudentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.studentService.getFilteredStudents().subscribe(students => {
      this.filteredStudents = students;
    });
  }

  onSearchChange(text: string) {
    this.studentService.setSearchText(text);
  }

  showAddForm() {
    this.isAddingOrEditing = true;
    this.editingStudent = null;
    this.currentStudent = this.getEmptyStudent();
  }

  editStudent(student: Student) {
    this.isAddingOrEditing = true;
    this.editingStudent = { ...student };
    this.currentStudent = { ...student };
   
    this.studentService.setOriginalStudent(student);
  }

  saveStudent() {
    if (this.editingStudent) {
      if (!this.studentService.updateStudent(this.currentStudent)) {
        alert('Študent s týmto menom už existuje!');
        return;
      }
    } else {
      if (!this.studentService.addStudent(this.currentStudent)) {
        alert('Študent s týmto menom už existuje!');
        return;
      }
    }
    this.cancelEdit();
  }

  deleteStudent(student: Student) {
    if (confirm('Naozaj chcete vymazať študenta ' + student.firstName + ' ' + student.lastName + '?')) {
      this.studentService.deleteStudent(student.firstName, student.lastName);
    }
  }

  getEmptyStudent(): Student {
    return {
      firstName: '',
      lastName: '',
      dateOfBirth: undefined,
      averageGrade: undefined,
      class: undefined,
      fieldOfStudy: undefined,
      gender: undefined,
      info: undefined,
      disabled: false
    };
  }

  cancelEdit() {
    this.isAddingOrEditing = false;
    this.editingStudent = null;
    this.currentStudent = this.getEmptyStudent();
  }

  logout() {
    this.authService.logout();
  }
}