import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cloud } from '../model/cloud';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  apiUrl: string = environment.apiUrl;

  entityName: string = 'Clouds';

  constructor(
    private http: HttpClient,
  ) { }


  getAll(): Observable<Cloud[]> {
    return this.http
      .get<Cloud[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Cloud> {
    return this.http.get<Cloud>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(Cloud: Cloud): Observable<Cloud> {
    return this.http.post<Cloud>(`${this.apiUrl}${this.entityName}`,
      Cloud
    );
  }

  update(Cloud: Cloud): Observable<Cloud> {
    return this.http.patch<Cloud>(`${this.apiUrl}${this.entityName}/${Cloud.id}`,
      Cloud
    )
  }

  remove(Cloud: Cloud): Observable<Cloud> {
    return this.http.delete<Cloud>(`${this.apiUrl}${this.entityName}/${Cloud.id}`
    );
  }

  removeByID(id: number): Observable<Cloud> {
    return this.http.delete<Cloud>(`${this.apiUrl}${this.entityName}/${id}`
    );
  }
}
