import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDocumentReceive } from '../interfaces/idocument-receive';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private _apiUrl = 'http://localhost:3000/documents';

  constructor(private _http: HttpClient) {}

  // Función para obtener los documentos de un usuario en especifico
  public obtainDocumentsOfAUser(
    id_user: number
  ): Observable<IDocumentReceive[]> {
    return this._http.post<IDocumentReceive[]>(
      `${this._apiUrl}/getDocuments/${id_user}`,
      {}
    );
  }

  public sendDocument(file: File, idCategoria: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id_category_Document', idCategoria.toString());

    return this._http.post<any>(this._apiUrl, formData);
  }
}
