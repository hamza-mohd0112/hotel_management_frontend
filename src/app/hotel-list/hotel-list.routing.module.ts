import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewHotelListComponent } from "./view-hotel-list/view-hotel-list.component";
import { UpdateHotelListComponent } from "./update-hotel-list/update-hotel-list.component";
import { HotelInformationComponent } from "./hotel-information/hotel-information.component";

const routes: Routes = [
    { path: '',  redirectTo: 'hotel-list' ,pathMatch: 'full'},
    { path: 'hotel-list', component: ViewHotelListComponent },
    { path: 'updateHotelList', component: UpdateHotelListComponent, data: {addFunctionality: false }},
    { path: 'addHotel', component: UpdateHotelListComponent, data: {addFunctionality: true } },
    {path: 'view-hotel-details', component: HotelInformationComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class HotelListRoutingModule { }