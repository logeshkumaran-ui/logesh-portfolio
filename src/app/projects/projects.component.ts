import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      title: 'E-Commerce Emporium: Your One-Stop Online Shopping Destination',
      description: 'E-Commerce Emporium is an innovative online shopping platform designed to provide users with a seamless and convenient shopping experience from the comfort of their homes. With a user-friendly interface and a vast array of products, ranging from electronics and fashion to household essentials and more, E-Commerce Emporium caters to diverse consumer needs',
      coverpic: '../../assets/images/amy-shamblen-F52I5BtDuhY-unsplash.jpg',
      techstack: ['Angular', 'NodeJS'],
      website: '#projects'
    },
    {
      title: 'WeatherNow: Your Instant Weather Companion',
      description: 'WeatherNow is your go-to application for instant weather updates. With a sleek and intuitive interface, WeatherNow provides real-time weather information for any location worldwide.',
      coverpic: '../../assets/images/brian-mcgowan-kKyxIwvljBg-unsplash.jpg',
      techstack: ['Angular', 'NodeJS'],
      website: '#projects'
    },
    {
      title: 'BlogPostify',
      description: 'BlogPostify is a modern web application designed for creating, managing, and sharing blog posts. With an intuitive user interface built using Angular for the frontend and Node.js for the backend, BlogPostify offers a seamless experience for both bloggers and readers alike.',
      coverpic: '../../assets/images/thought-catalog-505eectW54k-unsplash.jpg',
      techstack: ['Angular', 'NodeJS'],
      website: '#projects'
    },
    {
      title: 'LearnHub: Udemy Clone Project',
      description: 'LearnHub" is a comprehensive e-learning platform designed to replicate the functionalities of Udemy, one of the leading online learning marketplaces. This clone project aims to provide a user-friendly interface for both instructors and students to create, publish, and enroll in courses across various subjects.',
      coverpic: '../../assets/images/lewis-keegan-gkiZ-F3yPiY-unsplash.jpg',
      techstack: ['Angular', 'NodeJS'],
      website: '#projects'
    },
  ];

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    // Create the horizontal scroll animation
    gsap.to("#projects-row", {
      x: () => -(document.querySelector("#projects-row")!.scrollWidth - document.documentElement.clientWidth + 250),
      scrollTrigger: {
        trigger: "#projects",
        scrub: .5,
        pin: true,
        start: "top top",
        end: () => "+=" + (document.querySelector("#projects-row")!.scrollWidth - document.documentElement.clientWidth)
      }
    });
  }

}

