import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EventNotificationComponent} from './events/components/event-notification/event-notification.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyEvent';
}
