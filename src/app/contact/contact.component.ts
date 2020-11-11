import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, FormArray, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    window.scrollTo(0, 0);
   }

  public submitted = false;
  ngOnInit(): void {
    const requestQuoteFor = history.state.subRoute;
    console.log(requestQuoteFor);
    let setUpSelected = false;
    let cleanUpSelected = false;
    let asNeededSelected = false;
    let fullServiceSelected = false;

    switch (requestQuoteFor){
      case 'setup':
        setUpSelected = true;
        break;
      case 'cleanup':
        cleanUpSelected = true;
        break;
      case 'asNeeded':
        asNeededSelected = true;
        break;
      case 'fullService':
        fullServiceSelected = true;
        break;
      default:
        break;
    }

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
        setup: setUpSelected,
        cleanup: cleanUpSelected,
        asNeeded: asNeededSelected,
        fullService: fullServiceSelected
      }),
      message: null
    });

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
  popUpConfirmation(): void{
    const contactModal = document.getElementById('myModal');
    contactModal.style.display = 'block';
  }
  closeModalBtn(): void{
    const contactModal = document.getElementById('myModal');
    contactModal.style.display = 'none';
    this.submitted = true;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
      this.submitted = true;
    }
  }
  sendAnotherMsg(): void{
    this.submitted = false;
  }
  onSubmit(): void{
    console.warn(this.contactForm);
  }

}
