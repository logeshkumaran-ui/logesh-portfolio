import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidednav-mobile',
  templateUrl: './sidednav-mobile.component.html',
  styleUrls: ['./sidednav-mobile.component.scss']
})
export class SidednavMobileComponent {
  @Output() closeSideNav = new EventEmitter();

  onToggleClose() {
    this.closeSideNav.emit();
  }

}
