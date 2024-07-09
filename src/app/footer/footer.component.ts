import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-footer',
   standalone: true,
   imports: [],
   templateUrl: './footer.component.html',
   styleUrl: './footer.component.scss',
   providers: [],
})
export class FooterComponent {
   // contactForm: FormGroup;
   // constructor(private fb: FormBuilder, private contactService: ContactService) {
   //    this.contactForm = this.fb.group({
   //       name: ['', Validators.required],
   //       email: ['', [Validators.required, Validators.email]],
   //       message: ['', Validators.required],
   //    });
   // }
   // ngOnInit(): void {}
   // onSubmit(): void {
   //    if (this.contactForm.valid) {
   //       this.contactService.sendContactForm(this.contactForm.value).subscribe(
   //          (response) => {
   //             console.log('Form submitted successfully', response);
   //          },
   //          (error) => {
   //             console.error('Error submitting form', error);
   //          }
   //       );
   //    }
   // }
}
