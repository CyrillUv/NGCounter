import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ButtonModule} from "primeng/button";
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-view-counter',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: 'view-counter.component.html',
  styleUrl: 'view-counter.component.css'
})
export class ViewCounterComponent {
  public valueCounter: number = 0;

    get disableIncrement(): boolean {
      return !this.settingsCounter.settings.disableSettings
        || (this.valueCounter === this.settingsCounter.settings.maxValue)
    }

    get disableDecrement(): boolean {
      return !this.settingsCounter.settings.disableSettings
        || (this.valueCounter === this.settingsCounter.settings.minValue)
    }

  constructor(public settingsCounter: CounterService) {


  }

}
