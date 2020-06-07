import { Component, OnInit } from '@angular/core';
import { ScreenlogicApiService, ControllerConfigBodyArray } from '../screenlogic-api.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass']
})
export class FeaturesComponent implements OnInit {
  circuitsInfo: ControllerConfigBodyArray[]
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

  ngOnInit() {
    setInterval(() =>this.getConfigCircuitsArray(), 5000);
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
