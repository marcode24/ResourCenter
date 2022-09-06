import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('menuSidenav') menuSidenav: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  showSidenav(): void {
    this.menuSidenav.nativeElement.classList.toggle('open');
  }

}
