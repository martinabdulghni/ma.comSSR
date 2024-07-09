import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi, withNoXsrfProtection } from '@angular/common/http';

@Component({
   selector: 'app-footer',
   standalone: true,
   imports: [ReactiveFormsModule],
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.scss',
   providers: [ContactService],
})
export class FooterComponent implements OnInit {
   contactForm: FormGroup;

   constructor(private fb: FormBuilder, private contactService: ContactService) {
      this.contactForm = this.fb.group({
         name: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         message: ['', Validators.required],
      });
   }

   ngOnInit(): void {}

   onSubmit(): void {
      if (this.contactForm.valid) {
         this.contactService.sendContactForm(this.contactForm.value).subscribe(
            (response) => {
               console.log('Form submitted successfully', response);
            },
            (error) => {
               console.error('Error submitting form', error);
            }
         );
      }
   }
}
