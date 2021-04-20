import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CustomValidators, MyErrorStateMatcher } from './custom-validators';
import { AuthService } from '../auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { CognitoUser } from '@aws-amplify/auth';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  email = environment.confirm.email;
  changePasswordForm: FormGroup = new FormGroup({
    email: new FormControl({value: this.email, disabled: true}),
    password: new FormControl(
      '', 
      [ Validators.required, 
        Validators.minLength(8),
        // check whether the entered password has a number
        CustomValidators.patternValidator(/\d/, {hasNumber: true}),
        // check whether the entered password has upper case letter
        CustomValidators.patternValidator(/[A-Z]/, {hasCapitalCase: true}),
        // check whether the entered password has a lower case letter
        CustomValidators.patternValidator(/[a-z]/, {hasSmallCase: true}),
        // check whether the entered password has a special character
        CustomValidators.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true
          }
        )
      ])
  });


  matcher = new MyErrorStateMatcher();

  hide = true;

  get emailInput() { return this.changePasswordForm.get('email'); }
  get passwordInput() { return this.changePasswordForm.get('password'); }

  constructor( public auth: AuthService,  
    private _notification: NotificationService, 
    private _router: Router,
    private _loader: LoaderService ) { }

  getPasswordInputError() {
    if (this.passwordInput.hasError('required')) {
      return 'A password is required.';
    }
  }
  
  changePassword() {
    this._loader.show();
    this.auth.signIn(environment.confirm.email, environment.confirm.password)
      .then((user: CognitoUser|any) => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED'){
          this.auth.completeNewPassword(user,this.passwordInput.value)
            .then((user: CognitoUser|any) =>{
              this._loader.hide();
              this._router.navigate(['']);
            })
            .catch((error: any) => {
              this._loader.hide();
              this._notification.show(error.message);
            })
        }
        else{
          this._loader.hide();
          this._router.navigate(['']);
        }
      })
      .catch((error: any) => {
        this._loader.hide();
        this._notification.show(error.message);
      })
  }

}
