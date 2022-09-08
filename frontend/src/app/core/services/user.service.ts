import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import Storage from '@utils/storage.util';

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
  ) { }


  setTheme(darkMode: boolean): void {
    const url = `${base_url}/user/theme`;
    this.http.patch(url, { darkMode }, this.headers).subscribe();
  }


}
