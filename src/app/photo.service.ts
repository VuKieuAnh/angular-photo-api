import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPhoto} from './model/photo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private readonly API_URL = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getListPhoto(count = 5): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.API_URL).pipe(
      map(response => response.filter((photo,
                                       i) => i < count))
    );
  }
}
