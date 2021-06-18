import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dev } from '../models/dev.model';

@Injectable({
  providedIn: 'root',
})
export class DevRegisterService {
  private devRegisters: any[];
  private url = 'http://localhost:3000/devs';
  private githubAPIUrl = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) {
    this.devRegisters = [];
  }

  get devs() {
    return this.devRegisters;
  }

  allDevs(): Observable<Dev[]> {
    return this.httpClient.get<Dev[]>(this.url);
  }

  addDev(dev: Dev): Observable<Dev> {
    this.hydrate(dev);
    return this.httpClient.post<Dev>(this.url, dev);
  }

  githubAutomaticFilling(githubUsername: string): Observable<any> {
    return this.httpClient.get(this.githubAPIUrl + githubUsername);
  }

  private hydrate(dev: any) {
    dev.date = new Date();
  }
}
