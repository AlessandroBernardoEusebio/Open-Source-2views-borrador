import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPurchaseConfirmationComponent } from './event-purchase-confirmation.component';

describe('EventPurchaseConfirmationComponent', () => {
  let component: EventPurchaseConfirmationComponent;
  let fixture: ComponentFixture<EventPurchaseConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPurchaseConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventPurchaseConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
