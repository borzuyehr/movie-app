import { 
  Component, 
  ChangeDetectorRef, 
  EventEmitter, 
  Output } from '@angular/core';
  import { MediaMatcher } from '@angular/cdk/layout';
  import { MatSidenav } from '@angular/material/sidenav';
  import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

  title = 'Movie App';

  mobileQuery: MediaQueryList;

  isAuthorized: boolean; 

  nav = [
    {
      'title': 'Users',
      'path': '/users'
    },
    {
      'title': 'Admin',
      'path': '/admin'
    }
  ];

  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change",this._mobileQueryListener);
    
  }

 

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }

}
