import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  data = {};
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('/assets/header.json').subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
