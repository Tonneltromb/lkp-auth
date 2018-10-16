import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: 'base-page.component.html',
  styleUrls: ['base-page.component.css']
})

export class BasePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/start-page']);
  }

}
