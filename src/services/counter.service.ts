import { Injectable } from '@angular/core';
import {Settings} from "../components/types";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public minValue = 5
  public maxValue = 20
  public settings: Settings =
  {minValue:0,maxValue:0,disableSettings:false}

  constructor() { }
}
