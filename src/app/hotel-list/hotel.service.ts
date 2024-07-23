import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  hotelID: any;
  // Add This HttpClient in constructor when You we want HTTP Connection with Backend.
  // private httpClient: HttpClient
  constructor() { }

  // Add Observale Return Type when API is in Working Condition.
  getHotelList() {
    const mockData = require('../../resources/mocks/viewHotelList.json');
    return mockData;

    //  Enable this return Code When Data Actually Comes From API side
    // return this.httpClient.get<any>(environment.apiURL + '/EndPoint Of Get API')
    //           .pipe(map(response => {
    //               return response;
    // }));
  }

  getHotelListFromSession(){
    if(sessionStorage && sessionStorage?.length == 0 && (sessionStorage.getItem('isAllDeleted')) == 'Yes'){
      return [];
    }
    if(sessionStorage && sessionStorage?.length != 0){
    const hotelList = JSON.parse(sessionStorage?.getItem('HotelList') || '');
    return hotelList;
    }
  }

  setHotelID(event: any){
    sessionStorage.setItem('hotelKey', event);
  }

  getHotelData(){

    const hotelKey = sessionStorage.getItem('hotelKey');
    const mockData = this.getHotelListFromSession();
    const respectiveHoteldata = mockData.filter( (val: any) => {
      if(val.hotelID == hotelKey) return val;
    })

    return respectiveHoteldata;
  }


}
