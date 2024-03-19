import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isDarkMode: boolean = true;
  @Output() SideNavToggle = new EventEmitter();
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    document.body.classList.add('dark-theme');
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleThemes() {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      this.isDarkMode = false;
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      this.isDarkMode = true;
    }
  }

  openSidenav() {
    this.SideNavToggle.emit();
  }
}
