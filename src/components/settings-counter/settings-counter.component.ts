import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-settings-counter',
  standalone: true,
  imports: [],
  templateUrl: './settings-counter.component.html',
  styleUrl: './settings-counter.component.css',})
export class SettingsCounterComponent {
@Input({required:true})
public minValueSetting!:number

@Output()
public emitSave = new EventEmitter()

  public save(){
  this.emitSave.emit({value:'save'})
 }
}
