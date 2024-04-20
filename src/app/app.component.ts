import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ViewCounterComponent} from "../components/view-counter/view-counter.component";
import {SettingsCounterComponent} from "../components/settings-counter/settings-counter.component";
import {Settings} from "../components/types";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewCounterComponent, SettingsCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public minValue = 0
  public maxValue = 10
  public settings: Settings = {minValue:0,maxValue:0,disableSettings:false}

  public save(event: Settings): void{
    this.settings = event;
  }
}
