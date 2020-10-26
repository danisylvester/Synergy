import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navToChange = true;

  ngOnInit(): void {
  }


}
