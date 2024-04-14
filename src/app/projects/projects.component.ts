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
      title: 'E-Commerce Emporium: Your One-Stop Online Shop',
      description: 'E-Commerce Emporium: Your one-stop online shop, delivering convenience and choice right to your doorstep with a user-friendly interface and diverse product selection.',
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
      description: 'BlogPostify, a sleek web app, facilitates effortless blog creation, management, and sharing, boasting an Angular frontend and Node.js backend for a user-friendly experience.',
      coverpic: '../../assets/images/thought-catalog-505eectW54k-unsplash.jpg',
      techstack: ['Angular', 'NodeJS'],
      website: '#projects'
    },
    {
      title: 'LearnHub: Udemy Clone Project',
      description: '"LearnHub" is an e-learning platform mirroring Udemy\'s features, facilitating course creation and enrollment for instructors and students across diverse subjects with a user-friendly interface.',
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

