import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;  
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
