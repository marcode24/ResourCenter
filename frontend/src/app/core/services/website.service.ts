import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'environments/environment';
import { Website } from '@models/website.model';
import { IResponseWebsite } from '@interfaces/response.interface';
import { IParams } from '@interfaces/params.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(
    private http: HttpClient,
  ) {}

  getWebsites(limit = 10, skip = 0): Observable<Website[]> {
    const url = `${base_url}/website?limit=${limit}&skip=${skip}`;
    return this.http.get<IResponseWebsite>(url).pipe(map(resp => resp.websites));
  }

  getWebsitesByResource(resourceID: string, { limit = 10, skip = 0, search }: IParams): Observable<Website[]> {
    let url = `${base_url}/website/resource/${resourceID}?limit=${limit}&skip=${skip}`;
    if(search && search.trim().length > 0) {
      url += `&search=${search}`;
    }
    return this.http.get<IResponseWebsite>(url).pipe(map(resp => resp.websites));
  }

  getWebsite(websiteId: string): Observable<Website> {
    const url = `${base_url}/website/${websiteId}`;
    return this.http.get<IResponseWebsite>(url).pipe(map(resp => resp.website));
  }


}