import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import materials
import { MaterialModule } from './material/material.module';
import { MatTableExporterModule } from 'mat-table-exporter';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './pages/admin/admin.component';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { CountryCodeSelectComponent } from './auth/country-code-select/country-code-select.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './loader/loader.component';
import { FilterPipe } from './auth/country-code-select/filter.pipe';
import { NavComponent } from './nav/nav.component';
const awsconfig = require('../aws-exports.js').default;


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    AuthComponent,
    SignInComponent,
    ResetPasswordComponent,
    ConfirmCodeComponent,
    ChangePasswordComponent,
    CountryCodeSelectComponent,
    LoaderComponent,
    FilterPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    //Materials Modules
    MaterialModule,
    MatTableExporterModule,

    //amplify
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
