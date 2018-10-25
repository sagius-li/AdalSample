import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query = '/user';
  resources: any[] = [];

  headers: HttpHeaders;

  constructor(private http: HttpClient, private adal: AdalService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const jwt = adal.userInfo.token;
    this.headers.append('Authorization', 'Bearer ' + jwt);
  }

  ngOnInit() {}

  onApplyQuery() {
    this.http
      .get(
        `https://idcloudeditionservice2.azurewebsites.net/api/v2/resources?filter=${this.query}`,
        {
          headers: this.headers
        }
      )
      .subscribe(
        (data: any) => {
          if (data && data.Results && data.Results.length > 0) {
            this.resources = data.Results;
          } else {
            this.resources = [];
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
