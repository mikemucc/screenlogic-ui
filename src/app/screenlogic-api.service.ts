import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'
import {environment} from '../environments/environment';

export interface SlApiAllResponse {
  meta: SlMetaData
  firmware: Object
  status: SLStatus
  chemistry: Object
  saltCell: Object
  controllerConfig: ControllerConfig
}
export interface SlMetaData {
  lastUpdated	: Number
  tempInCelcius :	Boolean
  successfulPolling	: Boolean
  server : {	
    ipAddress	: String
    port : Number
    name : String
  }
  airTemp : Number
  activeAlarms : Number
  serviceMode : Boolean
  freezeMode : Number
  tempScale: String
  lightsOn: Boolean
  cleanerDelay: Number
}

export interface PoolSpaInfo {
  name: string
  circuitId: number
  interfaceId: number
  waterTemp: number
  active: boolean
  airTemp: number
  tempScale: string
  heater: {
    equipPresent: {
      heater:	boolean
      solar:	boolean
      solarisheater:	boolean
      cooler:	boolean
    }
    modeCode: number
    mode: string
    active: false
    activeCode: number
    activeType: string
    tempScale: string
    setpoint: {
      current: number
      min: number
      max: number
    }
  }
}

export interface SLStatus {
  bodies: Array<PoolSpaInfo>
  device: Object
  chemistry: Object
  circuits: Array<StatusCircuitsArray>
}
export interface StatusCircuitsArray {
  id: Number
  state: Number
  colorSet: Number
  colorPos: Number
  colorStagger: Number
  delay: Number
}

export interface ControllerConfig {
  tempInCelcius: Boolean
  tempScale: String
  pumps: Array<Number>
  bodyArray: Array<ControllerConfigBodyArray>
  controllerId: Number
  poolMinSetPoint: Number
  poolMaxSetPoint: Number
  spaMinSetPoint: Number
  spaMaxSetPoint: Number
  interfaceTabFlags: Number
  equipFlags: Number
  equipPresent: EquipmentConfig
}

export interface ControllerConfigBodyArray {
  circuitId: Number
  name: String
  nameIndex: Number
  function: Number
  interface: Number
  flags: Number
  colorSet: Number
  colorPos: Number
  colorStagger: Number
  deviceId: Number
  dfaultRt: Number
}
export interface EquipmentConfig {
  heater: Boolean
  solar: Boolean
  solarisheater: Boolean
  chlorinator: Boolean
  cooler:	Boolean
  intellichem: Boolean
}

@Injectable({
  providedIn: 'root',
})
export class ScreenlogicApiService {
  private slApiUrl = environment.apiBaseUrl

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
  constructor(private http: HttpClient) {}
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getAllInfo(): Observable<SlApiAllResponse> {
    const url = this.slApiUrl + '/all'
    return this.http.get<SlApiAllResponse>(url)
  }
  getMetaInfo(): Observable<SlMetaData> {
    const url = this.slApiUrl + '/all'
    return this.http
      .get<SlApiAllResponse>(url)
      .pipe(map(metainfo => metainfo.meta))
  }
  getPoolSpaInfo(): Observable<PoolSpaInfo[]> {
    const url = this.slApiUrl + '/all'
    return this.http
      .get<SlApiAllResponse>(url)
      .pipe(map(bodies => bodies.status.bodies))
  }
  getConfigCircuitsArray(): Observable<ControllerConfigBodyArray[]>{
    const url = this.slApiUrl + '/all'
    return this.http
      .get<SlApiAllResponse>(url)
      .pipe(map(circuits => circuits.controllerConfig.bodyArray))
  }
  getEquipmentConfig(): Observable<EquipmentConfig>{
    const url = this.slApiUrl + '/all'
    return this.http
      .get<SlApiAllResponse>(url)
      .pipe(map(config => config.controllerConfig.equipPresent))
  }
  setHeatSetPoint(body: String, temperature: Number): Observable<any>{
    const url = this.slApiUrl + '/' + body + '/heater/setpoint/' + temperature
    return this.http
      .put(url, temperature, this.httpOptions)
  }
  setHeatMode(body: String, mode: Number): Observable<any>{
    const url = this.slApiUrl + '/' + body + '/heater/mode/' + mode
    return this.http
      .put(url, mode, this.httpOptions)
  }
  changeCircuitStatus(circuit: Number, state: Number): Observable<any>{
    const url = this.slApiUrl + '/circuit/' + circuit + '/' + state
    console.log('Sending PUT to ' + url)
    var returnmessage = this.http.put(url, '', this.httpOptions)
    console.log(returnmessage)
    return returnmessage
  }
  sendLightcommand(command: Number): Observable<any>{
    const url = this.slApiUrl + '/lights/' + command
    console.log('Sending PUT to ' + url)
    var returnmessage = this.http.put(url, '', this.httpOptions)
    console.log(returnmessage)
    return returnmessage
  }

}

