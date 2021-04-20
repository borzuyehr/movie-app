import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Auth } from '@aws-amplify/auth';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor() { }

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('',[ Validators.email, Validators.required ]),
  });

  hide = true;

  get emailInput() { return this.resetPasswordForm.get('email'); }

  getEmailInputError() {
    if (this.emailInput.hasError('email')) {
      return 'Please enter a valid email address.';
    }
    if (this.emailInput.hasError('required')) {
      return 'An Email is required.';
    }
  }

  // submit password reset
  sendConfirmCode(username, code, new_password){
    Auth.forgotPasswordSubmit(username, code, new_password)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

}
