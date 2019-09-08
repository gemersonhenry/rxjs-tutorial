import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IUser {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShareUserService {

  private userSubject = new Subject<IUser>();
  public user$ = this.userSubject.asObservable();

  constructor() { }

  public shareUser(user: IUser) {
    this.userSubject.next(user);
  }
}
