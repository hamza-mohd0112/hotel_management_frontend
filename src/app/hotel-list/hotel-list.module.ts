import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHotelListComponent } from './view-hotel-list/view-hotel-list.component';
import { HotelListRoutingModule } from './hotel-list.routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateHotelListComponent } from './update-hotel-list/update-hotel-list.component';
import { MatCardModule } from '@angular/material/card';
import { HotelInformationComponent } from './hotel-information/hotel-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputTypeDirective } from '../directive/input-type.directive';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    ViewHotelListComponent,
    UpdateHotelListComponent,
    HotelInformationComponent,
    InputTypeDirective
  ],
  imports: [
    CommonModule,
    HotelListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class HotelListModule { }
