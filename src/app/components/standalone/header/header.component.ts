import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tts-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private isCollapsed: boolean = true;

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
