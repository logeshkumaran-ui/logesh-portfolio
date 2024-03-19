import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logesh-portfolio';
  // prevScrollPos = window.scrollY;
  visible = true;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(event: any) {
  //   const currentScrollPos = window.scrollY;
  //   this.visible = currentScrollPos < this.prevScrollPos;
  //   this.prevScrollPos = currentScrollPos <= 0 ? 0 : currentScrollPos;

  //   let sections = document.querySelectorAll('.section-divider');
  //   sections.forEach(section => {
  //     let top = window.scrollY;
  //     let offset = (section as HTMLElement).offsetTop + 150;
  //     let height = (section as HTMLElement).offsetHeight;

  //     if (top >= offset && top < offset + height) {
  //       section.classList.add('show-animate');
  //     }
  //     else {
  //       section.classList.remove('show-animate');
  //     }
  //   })
  // }
}
