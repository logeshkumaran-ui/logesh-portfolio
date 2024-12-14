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
      "position": "Associate - Projects",
      "period": "Dec-2024 to Present",
      "company": "Cognizant",
      "location": "Coimbatore",
      "description": `Started to colloborate with the team and the organization to develop project as a full stack developer`,
      "skills": [
        { "img": "../assets/images/angular_logo.png", "skill": 'Angular' },
        { "img": "../assets/images/angular_material.jpg", "skill": 'Angular Material' },
        { "img": "../assets/images/primeng-logo.png", "skill": 'primeNg' },
        { "img": "../assets/images/JavaScript_logo.png", "skill": 'JavaScript' },
        { "img": "../assets/images/typescript_logo.png", "skill": 'Typescript' },
        { "img": "../assets/images/.netcore_logo.png", "skill": '.NET Core' }
      ]
    },
    {
      "id": 2,
      "position": "Software developer",
      "period": "Jul-2022 to Nov-2024",
      "company": "Augmented Transformations Private Limited",
      "location": "Pune",
      "description": `Following my internship, I embarked on a journey of continuous learning and growth, honing my skills in Angular and expanding my knowledge through self-directed research and exploration of advanced concepts.
      Throughout my tenure as an Angular Developer, I have had the opportunity to develop my skills further, 
      particularly in utilizing Angular Material and primeNg for UI design and enhancing user experience. In addition to mastering Angular, I have deepened my understanding of TypeScript, further solidifying my expertise in frontend development`,
      "skills": [
        { "img": "../assets/images/angular_logo.png", "skill": 'Angular' },
        { "img": "../assets/images/angular_material.jpg", "skill": 'Angular Material' },
        { "img": "../assets/images/primeng-logo.png", "skill": 'primeNg' },
        { "img": "../assets/images/JavaScript_logo.png", "skill": 'JavaScript' },
        { "img": "../assets/images/typescript_logo.png", "skill": 'Typescript' },
        { "img": "../assets/images/nodejs_logo.png", "skill": 'NodeJS' }
      ]
    },
    {
      "id": 3,
      "position": "Intern",
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
      'skill': 'CSS, BOOTSTRAP',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Angular, Angular Material',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Javascript, Typescript',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'SQL, POSTGRESQL',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'NODEJS, EXPRESS',
      'progress': '70%'
    }
  ];

  education = [
    {
      "college": [
        {
          "id": 1,
          "school": "SNS College Of Technology",
          "degree": "Master of Computer Applications - MCA",
          "fieldofstudy": "Computer science",
          "period": "Sep-2019 to May-2021",
        },
        {
          "id": 2,
          "school": "SNR Sons College Of Arts and Science",
          "degree": "Bachelor's degree",
          "fieldofstudy": "Computer science",
          "period": "Jun-2016 to May-2019",
        }
      ]
    },
    {
      "school": [
        {
          "id": 1,
          "school": "PACM Higher Secondary School",
          "degree": "Higher secondary",
          "fieldofstudy": "Computer science",
          "period": "Jun-2014 to Apr-2016",
        },
        {
          "id": 2,
          "school": "PACM Higher Secondary School",
          "degree": "Secondary",
          "fieldofstudy": "Schooling",
          "period": "Jun-2013 to Apr-2014",
        }
      ]
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
