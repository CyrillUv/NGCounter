import {Component, Input} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Settings} from "../types";

@Component({
  selector: 'app-view-counter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: 'view-counter.component.html',
  styleUrl: 'view-counter.component.css'
})
export class ViewCounterComponent {
  @Input()
  public settings!: Settings;

  public valueCounter: number = 0;

    get disableIncrement(): boolean {
      return !this.settings.disableSettings || (this.valueCounter === this.settings.maxValue)
    }

    get disableDecrement(): boolean {
      return !this.settings.disableSettings || (this.valueCounter === this.settings.minValue)
    }
}
