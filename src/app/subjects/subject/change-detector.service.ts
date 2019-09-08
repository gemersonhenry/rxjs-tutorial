import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectorService {

  private changeSubject = new Subject();
  public change$ = this.changeSubject.asObservable();

  constructor() { }

  public emitChange() {
    this.changeSubject.next();
  }
}
