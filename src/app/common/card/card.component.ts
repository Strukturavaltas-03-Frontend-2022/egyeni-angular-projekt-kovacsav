import { Component, Input, OnInit } from '@angular/core';
import { Cloud } from 'src/app/model/cloud';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cloud: Cloud = new Cloud;

  constructor() { }

  ngOnInit(): void {
  }

}
