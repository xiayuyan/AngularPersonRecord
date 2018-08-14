import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Psycho } from './psycho';

@Injectable()
export class PsychoService {
  private psychosUrl = 'http://localhost:2403/psychosentences';

  constructor(private httpClient: HttpClient) { }

  getPsychos(): Observable<Psycho[]> {
    return this.httpClient.get<Psycho[]>(this.psychosUrl);
  }

  getPsychoById(id: string): Observable<Psycho> {
    return this.httpClient.get<Psycho>(`${this.psychosUrl}/${id}`);
  }

  addPsycho(psycho: Psycho): Observable<Psycho> {
    return this.httpClient.post<Psycho>(this.psychosUrl, psycho);
  }

  deletePsycho(id: string): Observable<any> {
    return this.httpClient.delete(`${this.psychosUrl}/${id}`);
  }

  updatePsycho(psycho: Psycho): Observable<Psycho> {
    return this.httpClient.put<Psycho>(this.psychosUrl, psycho);
  }
}
