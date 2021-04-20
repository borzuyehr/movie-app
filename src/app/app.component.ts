import { 
  Component, 
  ChangeDetectorRef, 
  EventEmitter, 
  Output } from '@angular/core';
  import { MediaMatcher } from '@angular/cdk/layout';
  import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-app';

  mobileQuery: MediaQueryList;

  isAuthorized: boolean;

  nav = [
    {
      'title': 'Users Page',
      'path': '/users'
    },
    {
      'title': 'Admin Page',
      'path': '/admin'
    }
  ];

  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
