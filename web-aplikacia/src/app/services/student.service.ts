// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {

//   constructor() { }
// }

// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student, INITIAL_STUDENTS } from '../models/student.types';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students = new BehaviorSubject<Student[]>(INITIAL_STUDENTS);
  private searchText = new BehaviorSubject<string>('');

  getStudents(): Observable<Student[]> {
    return this.students;
  }

  getFilteredStudents(): Observable<Student[]> {
    return new Observable<Student[]>(observer => {
      this.students.subscribe(students => {
        this.searchText.subscribe(searchText => {
          if (!searchText) {
            observer.next(students);
            return;
          }
          
          const filtered = students.filter(student => 
            student.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            student.lastName.toLowerCase().includes(searchText.toLowerCase())
          );
          observer.next(filtered);
        });
      });
    });
  }

  setSearchText(text: string) {
    this.searchText.next(text);
  }

  addStudent(student: Student): boolean {
    const currentStudents = this.students.value;
    
    // Check for duplicate name combination
    if (this.isDuplicateName(student.firstName, student.lastName)) {
      return false;
    }

    student.lastEdit = new Date();
    this.students.next([...currentStudents, student]);
    return true;
  }

  updateStudent(updatedStudent: Student): boolean {
    const currentStudents = this.students.value;
    const index = currentStudents.findIndex(s => 
      s.firstName === updatedStudent.firstName && 
      s.lastName === updatedStudent.lastName
    );

    if (index === -1) return false;

    updatedStudent.lastEdit = new Date();
    const newStudents = [...currentStudents];
    newStudents[index] = updatedStudent;
    this.students.next(newStudents);
    return true;
  }

  deleteStudent(firstName: string, lastName: string) {
    const currentStudents = this.students.value;
    const filteredStudents = currentStudents.filter(s => 
      !(s.firstName === firstName && s.lastName === lastName)
    );
    this.students.next(filteredStudents);
  }

  private isDuplicateName(firstName: string, lastName: string): boolean {
    return this.students.value.some(s => 
      s.firstName.toLowerCase() === firstName.toLowerCase() && 
      s.lastName.toLowerCase() === lastName.toLowerCase()
    );
  }
}
