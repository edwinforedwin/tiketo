import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingticketComponent } from './pendingticket.component';

describe('PendingticketComponent', () => {
  let component: PendingticketComponent;
  let fixture: ComponentFixture<PendingticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingticketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
