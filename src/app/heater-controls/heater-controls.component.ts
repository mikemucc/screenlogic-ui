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
  private tempSliderMoved(event: MatSliderChange, bodyName: String){
    var eventlog: String = bodyName +  " setpoint slider changed to " + event.value
    // console.log(eventlog)
    this.poolSpaData.setHeatSetPoint(bodyName, event.value).subscribe(response => {});
    // console.log(event.value)
    // console.log(bodyId)
  }
  public heatModeToggle(bodyName: String, heaterMode: Number) {
    // console.log(heaterMode);
    // console.log(bodyName);
    this.poolSpaData.setHeatMode(bodyName, heaterMode).subscribe(response => {});
    // console.log(circuitId + ' ' + newState)
    // this.poolSpaData.changeCircuitStatus(circuitId, newState).subscribe(response => {});      
}
  constructor(
    private poolSpaData: ScreenlogicApiService
  ) { }

  ngOnInit() {
  }
}
