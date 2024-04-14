import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, ScrollTrigger } from "gsap/all";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image1-class", {
      scrollTrigger: {
        trigger: '#image1-class',
        toggleActions: 'restart pause resume pause',
        start: 'top center',
        end: () => '+=' + (document.querySelector("#image1-class") as HTMLElement).offsetWidth,
      },
      x: 120,
      y: 55,
      rotation: 360,
      duration: 1.5,
      opacity: 1
    });
    gsap.to("#image2-class", {
      scrollTrigger: {
        trigger: '#image2-class',
        toggleActions: 'restart pause resume pause',
        start: 'top center',
        end: () => '+=' + (document.querySelector("#image2-class") as HTMLElement).offsetWidth,
      },
      x: -120,
      y: 55,
      rotation: 360,
      duration: 1.5,
      opacity: 1
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Send form data to backend or perform other actions
      console.log(this.contactForm.value);
    } else {
      // Form is invalid, handle error
      console.error('Form is invalid');
    }
  }

}
