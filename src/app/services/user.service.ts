import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationProperties} from '../common/application.properties';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUserById(id: number) {
    return this.http.get(`${ApplicationProperties.URL}/users?id=${id}`);
  }
}
