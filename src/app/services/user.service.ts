import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Properties} from '../common/application.properties';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUserById(id: number) {
    return this.http.get(`${Properties.URL}/users?id=${id}`);
  }
}
