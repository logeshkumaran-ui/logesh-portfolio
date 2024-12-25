import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap, ScrollTrigger } from "gsap/all";
import { PortfolioService } from '../portfolio.service';
import { Subject, takeUntil } from 'rxjs';
// import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  contactForm: FormGroup;
  private destroy$ = new Subject<void>();
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private service: PortfolioService,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      access_key: ['50606f87-e9ae-4c07-8d57-9b6f8edb8915', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#image1-class", {
      scrollTrigger: {
        trigger: '#image1-class',
        toggleActions: 'restart',
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
        toggleActions: 'restart',
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
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      // Send form data to backend or perform other actions
      this.service.sendMail(this.contactForm.value).pipe(takeUntil(this.destroy$)).subscribe(
        {
          next: (res: any) => {
            this.snackBar.open(res.message, 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            console.log(res.message);
            
          },
          error: (err: any) => {
            this.snackBar.open('An error occurred while sending the email. Please try again later.', 'Ok', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            console.error(err);
          }
        }
      )
      console.log(this.contactForm.value);
    } else {
      // Form is invalid, handle error
      console.error('Form is invalid');
        // If some fields are invalid, show specific error messages
        this.showValidationErrors();
    }
  }

  private showValidationErrors() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      if (control?.invalid && (control.dirty || control.touched)) {
        // Check for specific error types and display corresponding messages
        if (control.errors?.['required']) {
          this.snackBar.open(`${field} is required.`, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        } else if (control.errors?.['minlength']) {
          this.snackBar.open(`${field} should have at least ${control.errors['minlength'].requiredLength} characters.`, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        } else if (control.errors?.['email']) {
          this.snackBar.open('Please enter a valid email address.', 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      }
    });
  }

}
