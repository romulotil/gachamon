import { Component, OnInit } from '@angular/core';
import { storageKeys } from 'src/app/models/storage-keys.model';
import { GlobalService } from 'src/app/services/global.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'gm-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(
    private storage: StorageService) { }

  ngOnInit(): void {
    this.storage.setData(storageKeys.user, { name: "user"});
  }

}
