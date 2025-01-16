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

export const CLASSES = ['1.A', '1.B', '2.A', '2.B', '3.A', '3.B', '4.A', '4.B'];
export const FIELDS_OF_STUDY = ['Programovanie', 'Elektrotechnika', 'Umelá Inteligencia', 'Moderné technológie'];
export const GENDERS = ['Muž', 'Žena'];

export const INITIAL_STUDENTS: Student[] = [
  {
    firstName: 'Peter',
    lastName: 'Novák',
    dateOfBirth: new Date('2000-05-15'),
    averageGrade: 1.5,
    class: '3.A',
    fieldOfStudy: 'Programovanie',
    gender: 'Muž',
    disabled: false,
    info: 'Výborný študent v programovaní',
    lastEdit: new Date()
  },
  {
    firstName: 'Jana',
    lastName: 'Kováčová',
    dateOfBirth: new Date('2001-03-22'),
    averageGrade: 1.2,
    class: '2.B',
    fieldOfStudy: 'Elektrotechnika',
    gender: 'Žena',
    disabled: false,
    info: 'Víťazka matematickej olympiády',
    lastEdit: new Date()
  },
  {
    firstName: 'Martin',
    lastName: 'Horváth',
    dateOfBirth: new Date('2000-11-08'),
    averageGrade: 2.1,
    class: '4.A',
    fieldOfStudy: 'Programovanie',
    gender: 'Muž',
    disabled: true,
    info: 'Prestup z inej školy',
    lastEdit: new Date()
  },
  {
    firstName: 'Lucia',
    lastName: 'Novotná',
    dateOfBirth: new Date('2002-03-19'),
    averageGrade: 1.9,
    class: '2.D',
    fieldOfStudy: 'Elektrotechnika',
    gender: 'Žena',
    disabled: false,
    info: 'Obľúbená medzi spolužiakmi a učiteľmi',
    lastEdit: new Date()
  },
  {
    firstName: 'Tomáš',
    lastName: 'Varga',
    dateOfBirth: new Date('2000-10-05'),
    averageGrade: 4.5,
    class: '1.A',
    fieldOfStudy: 'Programovanie',
    gender: 'Muž',
    disabled: true,
    info: 'Študent s pomalším tempom učenia, ale veľkou snahou',
    lastEdit: new Date()
  },
  {
    firstName: 'Zuzana',
    lastName: 'Bieliková',
    dateOfBirth: new Date('2003-07-28'),
    averageGrade: 1.2,
    class: '3.B',
    fieldOfStudy: 'Informatika',
    gender: 'Žena',
    disabled: false,
    info: 'Veľmi talentovaná v programovaní a grafickom dizajne',
    lastEdit: new Date()
  },
  {
    firstName: 'Marek',
    lastName: 'Šimko',
    dateOfBirth: new Date('2001-01-14'),
    averageGrade: 2.8,
    class: '4.D',
    fieldOfStudy: 'Umelá Inteligencia',
    gender: 'Muž',
    disabled: false,
    info: 'Zaujíma sa o stredoveké dejiny',
    lastEdit: new Date()
  },
  {
    firstName: 'Filip',
    lastName: 'Lukáš',
    dateOfBirth: new Date('1998-11-07'),
    averageGrade: 2.1,
    class: '3.C',
    fieldOfStudy: 'Programovanie',
    gender: 'Muž',
    disabled: false,
    info: 'Aktívny účastník fyzikálnych olympiád',
    lastEdit: new Date()
  }
];