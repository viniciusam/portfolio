import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this._activatedRoute.data.forEach(data => {
    //     console.log(data);
    //     this._appCacheService.homePage = data[0];
    //     this._appCacheService.categories = data[1];
    //     this._appCacheService.projects = data[2];
    // });

    // this._router.events.subscribe(
    //   res => {
    //     //console.log(res);
    //     if (res instanceof NavigationEnd) {
    //        console.log(res);
    //     }
    //   }
    // );
  }

}
