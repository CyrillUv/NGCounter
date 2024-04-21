import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Settings} from "../types";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-settings-counter',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './settings-counter.component.html',
  styleUrl: './settings-counter.component.css',})
export class SettingsCounterComponent {
  // @Input({required:true})
  // public minValueSetting!:number
  //
  // @Input({required:true})
  // public maxValueSetting!:number

  // @Output()
  // public emitSave: EventEmitter<Settings> = new EventEmitter<Settings>();

  public minValue: number = 0;
  public maxValue: number = this.minValue+1;
  public disableSetting: boolean = false;
  constructor(public settingsService: CounterService) {
  }
    public save(): void {
    this.disableSetting = !this.disableSetting;
    this.settingsService.settings =
      {minValue: this.minValue,
        maxValue: this.maxValue,
        disableSettings:this.disableSetting}

  // this.emitSave.emit({minValue: this.minValue, maxValue: this.maxValue,disableSettings:this.disableSetting});
 }

}
