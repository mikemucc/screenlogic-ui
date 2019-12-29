import { Component, OnInit } from '@angular/core';
import {LightButton} from './lightButton';
import {COLORLIGHTBUTTONS, INTELLIBRITEBUTTONS, SOLIDCOLORBUTTONS} from './lightButtonArray'
import { ScreenlogicApiService, SlMetaData } from '../screenlogic-api.service';


@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.sass']
})
export class LightsComponent implements OnInit {
  colorLightButtons = COLORLIGHTBUTTONS;
  intelliBriteButtons = INTELLIBRITEBUTTONS;
  solidButtons = SOLIDCOLORBUTTONS;
  slMetaInfo: SlMetaData;

  public setLightOptions(command: any){
    this.slMetaData.sendLightcommand(command).subscribe(response => {});
  }
  public toggleLights(currentLightStatus: boolean){
      var lightCommand = (currentLightStatus) ? 0 : 1
      this.slMetaData.sendLightcommand(lightCommand).subscribe(response => {});
    }
  

  constructor(
    private slMetaData: ScreenlogicApiService
    ) { }

  ngOnInit() {
    setInterval(() =>this.getMetaInfo(), 5000);
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
