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
import { CommonModule } from '@angular/common'

// Material imports:
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { LightsComponent } from './lights/lights.component'
import { MatBadgeModule } from '@angular/material/badge';
import { FeaturesComponent } from './features/features.component'

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
