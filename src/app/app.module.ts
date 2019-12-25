import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component'
import { HeaterControlsComponent } from './heater-controls/heater-controls.component'
import { HttpClientModule } from '@angular/common/http'
import { PoolSpaStatusComponent } from './pool-spa-status/pool-spa-status.component'
import { LightsComponent } from './lights/lights.component'
import { FeaturesComponent } from './features/features.component'
import { CommonModule } from '@angular/common'



// Material imports:
import { MatCardModule } from '@angular/material/card'
// import {CardModule} from 'primeng/card';
import { MatButtonModule } from '@angular/material/button'
// import {ButtonModule} from 'primeng/button';
import { MatToolbarModule } from '@angular/material/toolbar'
// import {ToolbarModule} from 'primeng/toolbar';
import { MatIconModule } from '@angular/material/icon'
// TODO: Replace with FontAwesome icons

import { MatSliderModule } from '@angular/material/slider'
// import {SliderModule} from 'primeng/slider';
import { MatGridListModule } from '@angular/material/grid-list'
//Imported via CSS
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
// import {InputSwitchModule} from 'primeng/inputswitch';
import { MatTooltipModule } from '@angular/material/tooltip'
// import {TooltipModule} from 'primeng/tooltip';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

import { MatButtonToggleModule } from '@angular/material/button-toggle'
// import {SelectButtonModule} from 'primeng/selectbutton';
import { MatBadgeModule } from '@angular/material/badge';

//FontAwesome imports
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLightbulb, faToggleOn, faSwimmingPool, faHotTub, faPowerOff, faFire, faClock, faTools, faIcicles } from '@fortawesome/free-solid-svg-icons'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaterControlsComponent,
    HeaderComponent,
    PoolSpaStatusComponent,
    LightsComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatBadgeModule,
    FormsModule,
    FontAwesomeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLightbulb, faToggleOn, faSwimmingPool, faHotTub, faPowerOff, faFire, faClock, faTools, faIcicles);
}
}

// Commented out imports:
// CardModule,
// ButtonModule,
// ToolbarModule,
// SliderModule,
// InputSwitchModule,
// TooltipModule,
// SelectButtonModule,