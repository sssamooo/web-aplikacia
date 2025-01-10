// src/app/models/student.types.ts
export interface Student {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
    averageGrade?: number;
    class?: string;
    fieldOfStudy?: string;
    gender?: string;
    info?: string;
    disabled?: boolean;
    lastEdit?: Date;
  }
  
  export const CLASSES = ['Class A', 'Class B', 'Class C', 'Class D'];
  export const FIELDS_OF_STUDY = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
  export const GENDERS = ['Male', 'Female', 'Other', 'Prefer not to say'];
  
  // Mock data
  export const INITIAL_STUDENTS: Student[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('2000-05-15'),
      averageGrade: 4.5,
      class: 'Class A',
      fieldOfStudy: 'Computer Science',
      gender: 'Male',
      disabled: false,
      info: 'Outstanding student in programming',
      lastEdit: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: new Date('2001-03-22'),
      averageGrade: 4.8,
      class: 'Class B',
      fieldOfStudy: 'Mathematics',
      gender: 'Female',
      disabled: false,
      info: 'Math competition winner',
      lastEdit: new Date()
    },
    {
      firstName: 'Alex',
      lastName: 'Johnson',
      dateOfBirth: new Date('2000-11-08'),
      averageGrade: 3.9,
      class: 'Class A',
      fieldOfStudy: 'Physics',
      gender: 'Other',
      disabled: true,
      info: 'Transfer student',
      lastEdit: new Date()
    }
  ];