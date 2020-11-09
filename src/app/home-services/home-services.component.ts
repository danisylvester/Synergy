import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],

})
export class HomeServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      $('.card-col').on('mouseover', function(): void{
        $(this).addClass('hovering');
        });
      $('.card-col').on('mouseleave', function(): void{
        $(this).removeClass('hovering');
      });
  }

}
