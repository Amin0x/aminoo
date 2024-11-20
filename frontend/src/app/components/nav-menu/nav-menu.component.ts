import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isActive: boolean = false;

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    // Handle potential initial state from routing or storage (optional)
  }
}
