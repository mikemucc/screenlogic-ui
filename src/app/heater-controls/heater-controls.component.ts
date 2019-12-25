import { Component, OnInit, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {coerceNumberProperty} from '@angular/cdk/coercion';
// import { PoolSpaInfo } from '../poolSpaInfo';
import { MatSliderChange } from '@angular/material/slider'
import { ScreenlogicApiService, PoolSpaInfo, EquipmentConfig } from '../screenlogic-api.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle'



@Component({
  selector: 'app-heater-controls',
  templateUrl: './heater-controls.component.html',
  styleUrls: ['./heater-controls.component.sass']
})
export class HeaterControlsComponent implements OnInit {
  equipmentConfig: EquipmentConfig;
  // equipmentList: any
  @Input() body: PoolSpaInfo;
  @Input() tempSliderValue: number;
  private tempSliderMoved(event: MatSliderChange, bodyName: String){
    var eventlog: String = bodyName +  " setpoint slider changed to " + event.value
    this.poolSpaData.setHeatSetPoint(bodyName, event.value).subscribe(response => {});
    console.log(eventlog)
  }
  private directSetSetpoint(setpointValue: number, bodyName: String){
    this.tempSliderValue = setpointValue;
    this.poolSpaData.setHeatSetPoint(bodyName, setpointValue).subscribe(response => {});
  }
  public heatModeToggle(bodyName: String, heaterMode: Number) {
    this.poolSpaData.setHeatMode(bodyName, heaterMode).subscribe(response => {}); 
}
  constructor(
    private poolSpaData: ScreenlogicApiService
  ) { }

  ngOnInit() {
  }
}
