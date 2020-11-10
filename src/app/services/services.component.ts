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

    switch (learnMoreSelection){
      case 'setup':
        setTimeout(() => {
          scrollToOffset('setup');
        }, 500);
        break;
      case 'cleanup':
        setTimeout(() => {
          scrollToOffset('cleanup');
        }, 500);
        break;
      case 'monthly':
        setTimeout(() => {
          scrollToOffset('monthly');
        }, 500);
        break;
      case 'additional':
        setTimeout(() => {
          scrollToOffset('additional');
        }, 500);
        break;
      default:
        window.scrollTo(0, 0);
        break;
    }

  }

}
