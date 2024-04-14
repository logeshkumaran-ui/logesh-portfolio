import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initCarousel();
  }

  initCarousel() {
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      items: 1
    });
  }

}
