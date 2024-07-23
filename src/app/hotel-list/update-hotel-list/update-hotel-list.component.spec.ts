import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHotelListComponent } from './update-hotel-list.component';

describe('UpdateHotelListComponent', () => {
  let component: UpdateHotelListComponent;
  let fixture: ComponentFixture<UpdateHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateHotelListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
