import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query = '';

  private prepareOptions(): any {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json;')
      .set('Accept', 'application/json;')
      .set('Authorization', `Bearer ${this.adal.userInfo.token}`);
    return { headers };
  }

  constructor(private http: HttpClient, private adal: AdalService) {}

  ngOnInit() {}

  onApplyQuery() {
    this.http
      .get(
        'https://idcloudeditionservice2.azurewebsites.net/api/v2/resources?filter=/person',
        this.prepareOptions()
      )
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
