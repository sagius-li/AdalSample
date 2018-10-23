import { Component, OnInit } from '@angular/core';

import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdalSample';

  private adalConfig = {
    tenant: '2c1495b8-37c4-482c-8e5c-f8548307423d',
    clientId: '0eb6f069-2e81-409f-a1cb-1732b4498c94',
    endpoints: {
      'https://dovahkiin.onmicrosoft.com/todolistservice': '6534594c-e5a0-4c11-9726-76e55823135b'
    }
  }

  // private adalConfig = {
  //   tenant: 'selectedat.onmicrosoft.com',
  //   clientId: '1c7a1157-3834-4bfd-92e1-fb6799c6d3c4',
  //   endpoints: {
  //     'https://idcloudeditionservice2.azurewebsites.net': '426bafb3-9244-4000-bb89-461908fe0a35'
  //   }
  // }

  constructor(private adal: AdalService){
    this.adal.init(this.adalConfig);
  }

  ngOnInit(){
    this.adal.handleWindowCallback();

    if (!this.adal.userInfo.authenticated) {
      this.adal.login();
    }
  }
}
