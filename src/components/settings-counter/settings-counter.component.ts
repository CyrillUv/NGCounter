import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Settings} from "../types";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings-counter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './settings-counter.component.html',
  styleUrl: './settings-counter.component.css',})
export class SettingsCounterComponent {
  @Input({required:true})
  public minValueSetting!:number

  @Input({required:true})
  public maxValueSetting!:number

  @Output()
  public emitSave: EventEmitter<Settings> = new EventEmitter<Settings>();

  public minValue: number = 0;
  public maxValue: number = this.minValue+1;
  public disableSetting: boolean = false;

  public save(): void {
    this.disableSetting = true;
  this.emitSave.emit({minValue: this.minValue, maxValue: this.maxValue,disableSettings:this.disableSetting});
 }

}
