import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHotelListComponent } from './view-hotel-list.component';

describe('ViewHotelListComponent', () => {
  let component: ViewHotelListComponent;
  let fixture: ComponentFixture<ViewHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewHotelListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
