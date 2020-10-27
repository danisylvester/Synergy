import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, FormArray, FormControlName } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [null,
      Validators.required
      ],
      lastName: [null,
      Validators.required
      ],
      companyName: null,
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      phoneNumber: [null, [
        Validators.required
      ]],
      coreServices: this.fb.group({
        setup: false,
        cleanup: false,
        asNeeded: false,
        fullService: false
      }),
      message: null
    });

    this.contactForm.valueChanges.subscribe(console.log);
  }
  
  get firstName(): any{
    return this.contactForm.get('firstName');
  }
  get lastName(): any{
    return this.contactForm.get('lastName');
  }
  get email(): any{
    return this.contactForm.get('email');
  }
  get phoneNumber(): any{
    return this.contactForm.get('phoneNumber');
  }
  get message(): any{
    return this.contactForm.get('message');
  }
  onSubmit(): void{
    console.warn(this.contactForm);
  }



}
