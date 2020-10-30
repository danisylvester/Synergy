import { trigger } from '@angular/animations';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as $ from 'jquery';

// declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $(document).on('scroll', function(): void {
      const nav = $('.navbar');
      nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
      });
  }
}
