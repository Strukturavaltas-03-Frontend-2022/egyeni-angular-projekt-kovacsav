import { Component, Input, OnInit } from '@angular/core';
import { Cloud } from 'src/app/model/cloud';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cloud: Cloud = new Cloud;

  indexArray: number[] = [0, 1, 2, 3, 4]

  //modalTarget: string = '#' + this.cloud.id;

  constructor() { }

  ngOnInit(): void {
  }

}
