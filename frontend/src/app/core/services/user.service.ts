import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

import Storage from '@utils/storage.util';

import { IResponseWebsite } from '@interfaces/response.interface';

import { AuthService } from './auth.service';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get headers() {
    return {
      headers: {
        'x-token': Storage.getItem('x-token'),
      },
    };
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  setTheme(darkMode: boolean): void {
    const url = `${base_url}/user/theme`;
    this.http.patch(url, { darkMode }, this.headers).subscribe();
  }

  modifySavedWebsites(websiteId: string): Observable<Boolean> {
    const url = `${base_url}/user/saved/${websiteId}`;
    return this.http.patch<IResponseWebsite>(url, {}, this.headers).pipe(map(resp => resp.ok));
  }

}
