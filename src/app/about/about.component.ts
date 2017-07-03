import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 3000, noPause: true } }]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
