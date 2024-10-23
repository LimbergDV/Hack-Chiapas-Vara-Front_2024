import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private url = 'http://localhost:3000/documents';

  constructor(private http: HttpClient) { }

  public sendDocument(document: File | undefined): Observable<void> {
    return this.http.post<void> (`${this.url}/save-document`, document);
  }

}
