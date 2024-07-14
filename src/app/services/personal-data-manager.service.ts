import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataManagerService {
  private personalDataVisibleSubject = new BehaviorSubject<boolean>(false);
  public personalDataVisible$ = this.personalDataVisibleSubject.asObservable();

  public showPersonalData() {
    this.personalDataVisibleSubject.next(true)
  }
  constructor() { }
}
