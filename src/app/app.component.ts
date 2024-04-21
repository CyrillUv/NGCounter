import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ViewCounterComponent} from "../components/view-counter/view-counter.component";
import {SettingsCounterComponent} from "../components/settings-counter/settings-counter.component";
import {CounterService} from "../services/counter.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ViewCounterComponent, SettingsCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(public settingsService:CounterService) {
}
}
