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
    if (learnMoreSelection === 'setup'){
      setTimeout(() => {
        console.log('setup');
        document.getElementById('setup').scrollIntoView();
      }, 500);
    }
    else if (learnMoreSelection === 'cleanup'){
      setTimeout(() => {
        console.log('cleanup');
        document.getElementById('cleanup').scrollIntoView();
      }, 500);
    }
    else if (learnMoreSelection === 'monthly'){
      setTimeout(() => {
        console.log('monthly');
        document.getElementById('monthly').scrollIntoView();
      }, 500);
    }
    else if (learnMoreSelection === 'additional'){
      setTimeout(() => {
        console.log('additional');
        document.getElementById('additional').scrollIntoView();
      }, 500);
    }
    else {
      window.scrollTo(0, 0);
    }

  }


}
