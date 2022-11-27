import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cloud } from 'src/app/model/cloud';
import { CloudService } from 'src/app/service/cloud.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cloudList$: Observable<Cloud[]> = this.cloudService.list$;

  searchKeys: any[] = this.keyService.keys;

  phrase: string = '';

  filterKey: string = '';

  p: number = 1;

  sorterKey: string = 'id';
  direction: string = 'increasing';

  constructor(
    private cloudService: CloudService,
    private keyService: ConfigService
  ) { }

  ngOnInit(): void {
    this.cloudService.getAll();
  }

}
