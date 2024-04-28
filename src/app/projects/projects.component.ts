import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
// import { gsap, ScrollTrigger, Draggable } from "gsap/all";

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
      website: 'https://weathernow-logesh.netlify.app/'
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
  scrollTrigger: any;
  draggableInstance: any;

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger, Draggable);
    this.initHorizontalScrollAnimation();
    this.initManualDragScrolling();

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
    if (this.draggableInstance) {
      this.draggableInstance.kill();
    }

    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  initHorizontalScrollAnimation() {
    const projectsRow = document.querySelector("#projects-row")! as HTMLElement;
    const containerWidth = projectsRow.clientWidth;

    this.scrollTrigger = ScrollTrigger.create({
      trigger: '#projects',
      start: 'top top',
      end: () => `+=${projectsRow.scrollWidth - containerWidth}`,
      pin: true,
      scrub: 0.5,
      onUpdate: self => {
        const progress = self.progress;
        const scrollWidth = projectsRow.scrollWidth - containerWidth;
        const scrollValue = -scrollWidth * progress;
        projectsRow.style.transform = `translateX(${scrollValue}px)`;
      }
    });
  }

  initManualDragScrolling() {
    const projectsRow = document.querySelector("#projects-row")! as HTMLElement;
    const projectsContainer = document.querySelector("#projects-container")! as HTMLElement;
    const containerWidth = projectsRow.scrollWidth;

    this.draggableInstance = Draggable.create(projectsRow, {
      type: 'x',
      edgeResistance: 1,
      bounds: { minX: -containerWidth + projectsContainer.clientWidth, maxX: 0 },
      dragClickables: true,
      cursor: 'grab',
      activeCursor: "grabbing"
    });
  }

  handleResize() {
    if (this.scrollTrigger) {
      this.scrollTrigger.refresh();
    }
  }
}

