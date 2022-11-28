import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cloud } from 'src/app/model/cloud';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cloud: Cloud = new Cloud();

  @Output() onDelete = new EventEmitter<Cloud>();

  indexArray: number[] = [0, 1, 2, 3, 4]

  selectedCloudForDelete: Cloud = new Cloud;

  //modalTarget: string = '#' + this.cloud.id;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSelectCloud(cloud: Cloud): void {
    this.router.navigate(['/', 'editor', cloud.id]);
  }

  onSelectForDelete(cloud: Cloud): void {
    this.selectedCloudForDelete = cloud;
  }

  onDeleteCloud(cloud: Cloud): void {
    this.onDelete.emit(cloud);
  }
}
