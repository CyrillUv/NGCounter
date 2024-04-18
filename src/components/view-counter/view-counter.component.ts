import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

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

}
