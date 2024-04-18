import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ViewCounterComponent} from "../components/view-counter/view-counter.component";
import {SettingsCounterComponent} from "../components/settings-counter/settings-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewCounterComponent, SettingsCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public minValue = 3
  public save(event:any){
    console.log(event)
  }
  title = 'NGCounter';
}
