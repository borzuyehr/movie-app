import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./pages/users/users.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AuthComponent } from "./auth/auth.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { UnauthGuard } from "./auth/unauth.guard";
import { AuthGuard } from "./auth/auth.guard";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { ChangePasswordComponent } from "./auth/change-password/change-password.component";
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
  {path: '', component: NavComponent, canActivate : [ AuthGuard ], children: [    
     {
        path: '', 
        redirectTo: 'users', 
        pathMatch: 'full', 
        canActivate: [AuthGuard]
     },
     {
        path: 'users', 
        component: UsersComponent, 
        canActivate: [AuthGuard]
     },
     {
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard]
     }
  ]}, 
 {path: 'auth', component: AuthComponent, children: [    
   {      
      path: 'signin',      
      component: SignInComponent,      
      canActivate: [UnauthGuard]    
   },
   {
      path: 'resetPassword',      
      component: ResetPasswordComponent,      
      canActivate: [UnauthGuard]  
   },
   {
      path: 'changePassword',      
      component: ChangePasswordComponent,      
      canActivate: [UnauthGuard]  
   }
]},
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
