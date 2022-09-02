import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() {}

}
