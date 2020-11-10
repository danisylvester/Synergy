import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, catchError, single, timeout } from 'rxjs/operators';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public state: any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const learnMoreSelection = history.state.subRoute;

    function scrollToOffset(elID: string): void{
      const el = document.getElementById(elID);
      const elOffset = 60;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition - elOffset;

      window.scrollBy({
           top: offsetPosition,
           behavior: 'smooth'
      });
    }

    if (learnMoreSelection === 'setup'){
      setTimeout(() => {
        scrollToOffset('setup');
      }, 500);
    }
    else if (learnMoreSelection === 'cleanup'){
      setTimeout(() => {
        scrollToOffset('cleanup');
      }, 500);
    }
    else if (learnMoreSelection === 'monthly'){
      setTimeout(() => {
        scrollToOffset('monthly');
      }, 500);
    }
    else if (learnMoreSelection === 'additional'){
      setTimeout(() => {
        scrollToOffset('additional');
      }, 500);
    }
    else {
      window.scrollTo(0, 0);
    }

  }


}
