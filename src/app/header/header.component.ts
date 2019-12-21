import { Component, OnInit } from '@angular/core';
import { SlApiAllResponse, SlMetaData, ScreenlogicApiService } from '../screenlogic-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  slMetaInfo: SlMetaData;
  constructor(
    private slMetaData: ScreenlogicApiService
  ) { }

  ngOnInit() {
    setInterval(() =>this.getMetaInfo(), 2500);
  }

  getMetaInfo(): void {
    this.slMetaData.getMetaInfo()
      .subscribe((response: SlMetaData) => {
        // console.log(response);
        this.slMetaInfo = response;
      }, (error) => {
        console.log('error', error);
      }, () => {
        // console.log('complete');
      })
  }
}
