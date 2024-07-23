import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-information',
  templateUrl: './hotel-information.component.html',
  styleUrl: './hotel-information.component.scss'
})
export class HotelInformationComponent implements OnInit {

  hotelData: any;

  constructor(private hotelService: HotelServiceService, private router: Router) { }

  ngOnInit(){
   this.fetchHoteldata();
  }

  fetchHoteldata(){
     this.hotelData = this.hotelService.getHotelData();
  }

  onBack(){
    this.router.navigate(['journey/hotel-list']);
}

}
