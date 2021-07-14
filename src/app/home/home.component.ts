import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      let x = document.getElementsByClassName('mat-drawer-content');
      if (x.length > 0) x[0].scrollTo(0, 0);
    });
  }

  onActivate(event) {
    window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

  public navigate (route: string): void {
    this.router.navigateByUrl(route)
    document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
  }

}
