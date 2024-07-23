import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',  redirectTo: 'journey' ,pathMatch: 'full'},
    { path: 'journey', loadChildren: () => import("../../src/app/hotel-list/index").then(m => m.HotelListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
