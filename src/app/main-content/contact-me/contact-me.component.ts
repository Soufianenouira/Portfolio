import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, viewChild, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { GlobalFunctionsService } from '../../services/global-functions.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  http = inject(HttpClient);
  global = inject(GlobalFunctionsService);
  references = [
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
    { "author": "patrick", "comment": "cooler Typ" },
  ];

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false
  };
  @ViewChild('name') name: NgModel | undefined;
  @ViewChild('email') email: NgModel | undefined;
  @ViewChild('message') message: NgModel | undefined;
  @ViewChild('checkbox') checkbox: NgModel | undefined;
  mailTest = false;
  checkboxError = "none";
  disabled = true;
  border = "transparent";
  overlayerDisplay = "flex";
  msgSentDisplay = "none";

  post = {
    endPoint: 'https://soufiane-nouira.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  enableSendButton(){
    this.border = "#3dcfb73f";
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && !this.mailTest) {
      if (ngForm.form.valid) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.msgSentDisplay = "flex";
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info(),
        });
      }else{
        this.checkboxError = "flex";
        if (this.name) {
          this.name.control.markAsTouched();
        }
        if (this.email) {
          this.email.control.markAsTouched();
        }
        if (this.message) {
          this.message.control.markAsTouched();
        }
        if (this.checkbox) {
          this.checkbox.control.markAsTouched();
        }
      }
      

    } else if (ngForm.submitted  && this.mailTest) {
      if (ngForm.form.valid) {
        this.msgSentDisplay = "flex";
        ngForm.resetForm();
      }
      else{
        this.checkboxError = "flex";
        if (this.name) {
          this.name.control.markAsTouched();
        }
        if (this.email) {
          this.email.control.markAsTouched();
        }
        if (this.message) {
          this.message.control.markAsTouched();
        }
        if (this.checkbox) {
          this.checkbox.control.markAsTouched();
        }
      }
    }
  }
}
