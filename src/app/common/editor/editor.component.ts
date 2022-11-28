import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cloud } from 'src/app/model/cloud';
import { CloudService } from 'src/app/service/cloud.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  cloud$: Observable<Cloud | null> = this.cloudService.selected$;

  constructor(
    private cloudService: CloudService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => console.log(params['id']));
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] !== '0') {
        //console.log('params[id]', params['id'])
        this.activatedRoute.params.subscribe(
          params => this.cloudService.get(params['id'])
        )
      }
      else {
        this.cloud$ = of(new Cloud)
      }
    });
  }

  onUpdate(cloud: Cloud): void {
    if (cloud.id === 0) {
      this.cloudService.create(cloud);
    }
    else {
      this.cloudService.update(cloud);
    }
    this.router.navigate(['/', 'list']);
  }
}

