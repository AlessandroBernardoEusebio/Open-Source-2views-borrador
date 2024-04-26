import { Routes } from '@angular/router';
import { EventNotificationComponent } from './events/components/event-notification/event-notification.component';
import { EventPurchaseConfirmationComponent } from './events/components/event-purchase-confirmation/event-purchase-confirmation.component';
export const routes: Routes = [
  {path: 'event_notification', component: EventNotificationComponent},
  {path: 'event_purchase_confirmation', component: EventPurchaseConfirmationComponent}
];
