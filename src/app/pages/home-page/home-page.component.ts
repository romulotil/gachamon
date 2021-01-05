import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storageKeys } from 'src/app/models/storage-keys.model';
import { User } from 'src/app/models/user.model';
import { GlobalService } from 'src/app/services/global.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'gm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  value: User;

  constructor(
    private global: GlobalService,
    private storage: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.global.hasUser()) {
      this.router.navigate(['startup'])
    }
    this.value = this.storage.getData<User>(storageKeys.user);
  }
}
