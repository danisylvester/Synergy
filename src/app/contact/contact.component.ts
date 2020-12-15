import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgControl, FormArray, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MailgunService } from '../mailgun.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public submitted = false;
  public authorizedEmail = 'maria.sylvester10@gmail.com';
  contactForm: FormGroup;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private mailgunService: MailgunService) {
    window.scrollTo(0, 0);
   }
  ngOnInit(): void {
    const requestQuoteFor = history.state.subRoute;
    console.log(requestQuoteFor);
    let setUpSelected = false;
    let cleanUpSelected = false;
    let asNeededSelected = false;
    let fullServiceSelected = false;
    let trainingSelected = false;

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
      case 'training':
        trainingSelected = true;
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
        fullService: fullServiceSelected,
        training: trainingSelected
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
  get companyName(): any{
    return this.contactForm.get('companyName');
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
    if (this.contactForm.valid){
      const contactModal = document.getElementById('myModal');
      contactModal.style.display = 'block';
    }
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
  onSubmit(): void {
    const subject = 'Message from: ' + this.firstName.value + ' ' + this.lastName.value;
    const msg = 'Message from: ' + this.firstName.value + ' ' + this.lastName.value + '\n' +
    'Company Name: ' + this.companyName.value + '\n' +
    'Email; ' + this.email.value + '\n' +
    'Phone Number: ' + this.phoneNumber.value + '\n' + '\n' +
    'Service interest: ' + '\n' +
    'QBO Setup- ' + this.contactForm.get('coreServices.setup').value + '\n' +
    'QBO Cleanup- ' + this.contactForm.get('coreServices.cleanup').value + '\n' +
    'Monthly As Needed- ' + this.contactForm.get('coreServices.asNeeded').value + '\n' +
    'Monthly Full Service- ' + this.contactForm.get('coreServices.fullService').value + '\n' +
    'Training & Support- '+ this.contactForm.get('coreServices.training').value + '\n' +
    'Optional Message: ' + this.message.value;
    this.mailgunService.sendEmail(
      this.authorizedEmail,
      this.email.value,
      subject,
      msg).subscribe( res => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }

}
