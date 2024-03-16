import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  experience = [
    {
      "id": 1,
      "position": "Angular developer",
      "period": "Jun-2022 to Present",
      "company": "Augmented Transformations Private Limited",
      "location": "Pune",
      "description": `Developed my skills while developing web applications.
      Gained experience and knowledge to work independently`,
      "skills": [
        { "img": "../assets/images/angular_logo.png", "skill": 'Angular' },
        { "img": "../assets/images/angular_material.jpg", "skill": 'Angular Material' },
        { "img": "../assets/images/JavaScript_logo.png", "skill": 'JavaScript' },
        { "img": "../assets/images/typescript_logo.png", "skill": 'Typescript' },
        { "img": "../assets/images/nodejs_logo.png", "skill": 'NodeJS' }
      ]
    },
    {
      "id": 2,
      "position": "Software developer intern",
      "period": "Feb-2022 to Jun-2022",
      "company": "Augmented Transformations Private Limited",
      "location": "Bangalore",
      "description": `Started to work with augmented transformations as software developer intern.
      Developed my skills while developing web applications.
      Gained experience and knowledge to work independently`,
      "skills": [
        { "img": "../assets/images/html_logo.png", "skill": 'HTML' },
        { "img": "../assets/images/css_logo.png", "skill": 'CSS' },
        { "img": "../assets/images/bootstrap_logo.png", "skill": 'Bootstrap' },
        { "img": "../assets/images/angular_logo.png", "skill": 'Angular' },
        { "img": "../assets/images/JavaScript_logo.png", "skill": 'Javascript' },
        { "img": "../assets/images/typescript_logo.png", "skill": 'Typescript' }
      ]
    }
  ]

  skills: any = [
    {
      'id': '1',
      'skill': 'HTML',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'CSS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'BOOTSTRAP',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Angular, Angular Material',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Javascript, Typescript',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'SQL, POSTGRESQL',
      'progress': '70%'
    }
  ];

  education = [
    {
      "id": 1,
      "school": "SNS College Of Technology",
      "Degree": "Master of Computer Applications - MCA",
      "fieldofstudy": "Computer science",
      "period": "SEP-2019 to MAY-2021"
    },
    {
      "id": 2,
      "school": "SNR Sons College Of Arts and Science",
      "Degree": "Bachelor's degree",
      "fieldofstudy": "Computer science",
      "period": "JUN-2016 to MAY-2019"
    },
    {
      "id": 3,
      "school": "PACM Higher Secondary School",
      "Degree": "Higher secondary",
      "fieldofstudy": "Computer science",
      "period": "JUN-2014 to APR-2016"
    },
    {
      "id": 3,
      "school": "PACM Higher Secondary School",
      "Degree": "Secondary",
      // "fieldofstudy": "Schooling",
      "period": "JUN-2013 to APR-2014"
    }
  ]

  getExperiences(): Observable<any> {
    return of(this.experience);
  }

  getSkills(): Observable<any> {
    return of(this.skills);
  }

  getEducation(): Observable<any> {
    return of(this.education);
  }
}
