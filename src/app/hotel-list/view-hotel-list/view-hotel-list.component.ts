import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateHotelListComponent } from '../update-hotel-list/update-hotel-list.component';
import { ɵnormalizeQueryParams } from '@angular/common';
import { DeleteDialogBoxComponent } from '../delete-dialog-box/delete-dialog-box.component';


@Component({
  selector: 'app-view-hotel-list',
  templateUrl: './view-hotel-list.component.html',
  styleUrl: './view-hotel-list.component.scss'
})
export class ViewHotelListComponent implements OnInit{

  
  hotelList: any;

  constructor(private hotelService: HotelServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getlList();
  }

  private getlList(){

   this.hotelList = this.hotelService.getHotelListFromSession();
   if(this.hotelList == undefined || this.hotelList == null){
    this.hotelList = this.hotelService.getHotelList();
    sessionStorage.setItem('HotelList', JSON.stringify(this.hotelList));
   }
   
  //  if()
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateHotelList(id: number){
    if(id != null || id != undefined){
      this.hotelService.setHotelID(id);
      this.router.navigate(['journey/updateHotelList']);
  }
 }

 addHotel(){
    this.router.navigate(['journey/addHotel'])
 }

  deleteHotel(id: number){
    const dialogRef = this.dialog.open(DeleteDialogBoxComponent, {
      disableClose: true,
    }); 

    dialogRef.afterClosed().subscribe(result => {
      // received data from dialog-component
      
      if(result.data == 'Y'){
        const index = this.hotelList.findIndex( (val: any) => val.hotelID == id)
        if(index != -1){
          const removedElement = this.hotelList.splice(index, 1);
          sessionStorage.setItem('HotelList', JSON.stringify(this.hotelList));
          if(this.hotelList.length == 0){
          sessionStorage.setItem('isAllDeleted', 'Yes');
          }
          dialogRef.close();
        }
        else if(result.data == 'N'){
          dialogRef.close();
        }
      }
    })
  }

  viewHotelDetails(event : any){
    this.hotelService.setHotelID(event);
    this.router.navigate(['journey/view-hotel-details']);
  }

}


