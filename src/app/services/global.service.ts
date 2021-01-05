import { Injectable } from '@angular/core';
import { storageKeys } from '../models/storage-keys.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalValue: number;

  constructor(private storage: StorageService) { }

  hasUser(): boolean {
    return this.storage.getData(storageKeys.user) ?? false;
  }
}
