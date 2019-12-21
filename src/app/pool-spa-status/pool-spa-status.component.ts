import { Component, OnInit } from '@angular/core';
// import { PoolSpaInfo } from '../poolSpaInfo';
import { ScreenlogicApiService, ControllerConfigBodyArray, PoolSpaInfo } from '../screenlogic-api.service';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-pool-spa-status',
  templateUrl: './pool-spa-status.component.html',
  styleUrls: ['./pool-spa-status.component.sass']
})
export class PoolSpaStatusComponent implements OnInit {
  poolSpaInfo : PoolSpaInfo[];
  circuitsInfo : ControllerConfigBodyArray[];
  public bodyPowerToggle(newStateBool: Boolean, circuitId: Number) {
    // console.log('Got BodyPower Event for '+ circuitId)
    if(newStateBool){
      var newState = 1
    } else {
      newState = 0
    }
  }
  public toggle(event: MatSlideToggleChange, circuitId: Number) {
      if(event.checked){
        var newState = 1
      } else {
        newState = 0
      }
      this.poolSpaData.changeCircuitStatus(circuitId, newState).subscribe(response => {});      
  }
  constructor(
    private poolSpaData: ScreenlogicApiService
  ) { }

  ngOnInit(  ) {
    setInterval(() =>this.getPoolSpaInfo(), 2500);
    setInterval(() =>this.getConfigCircuitsArray(), 2500);
  }
  
  getPoolSpaInfo(): void {
    this.poolSpaData.getPoolSpaInfo()
      .subscribe((response: PoolSpaInfo[]) => {
        // console.log(response);
        this.poolSpaInfo = response;
      }, (error) => {
        console.log('error', error);
      }, () => {
        // console.log('complete');
      });
  }
  getConfigCircuitsArray(): void{
    this.poolSpaData.getConfigCircuitsArray()
      .subscribe((response: ControllerConfigBodyArray[]) => {
        this.circuitsInfo = response;
      }, (error) => {
        console.log('error', error);
      }, () => {
        // console.log('complete');
      })
  }
}
