import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreSvcService {

  constructor() { }

  public getTitle() {
    return "title from core";
  }
}
