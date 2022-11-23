import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cloud } from 'src/app/model/cloud';
import { CloudService } from 'src/app/service/cloud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cloudList$: Observable<Cloud[]> = this.cloudService.getAll();

  filterPhrase: string = '';

  constructor(
    private cloudService: CloudService,
  ) { }

  ngOnInit(): void {
  }

}
