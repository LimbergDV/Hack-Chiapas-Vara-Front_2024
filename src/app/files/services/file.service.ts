import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private url = 'http://localhost:3000/document/documents'; // Cambia esto a tu URL

  constructor(private http: HttpClient) {}

  public sendDocument(file: File, idCategoria: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id_category_Document', idCategoria.toString());
    
    return this.http.post<any>(this.url, formData);
  }
}
