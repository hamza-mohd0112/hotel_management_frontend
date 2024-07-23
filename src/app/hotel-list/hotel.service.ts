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
    // if(sessionStorage?.getItem('HotelList') != null && sessionStorage){
    //   const updatedData = sessionStorage.getItem('HotelList');
    //   const returnData = JSON.parse(updatedData || '')
    //   return returnData;
    // }
    // else{
    const mockData = require('../../resources/mocks/viewHotelList.json');
    // const sessionData = JSON.stringify(mockData)
    // sessionStorage.setItem('HotelList', sessionData);
    return mockData;
    // }
    

    //  Enable this return Code When Data Actually Comes From API side
    // return this.httpClient.get<any>(environment.apiURL + '/EndPoint Of Get API')
    //           .pipe(map(response => {
    //               return response;
    // }));
  }

  setHotelID(event: any){
    sessionStorage.setItem('hotelKey', event);
  }

  getHotelData(){

    const hotelKey = sessionStorage.getItem('hotelKey');
    const mockData = this.getHotelList();
    const respectiveHoteldata = mockData.filter( (val: any) => {
      if(val.hotelID == hotelKey) return val;
    })

    return respectiveHoteldata;
  }


}
