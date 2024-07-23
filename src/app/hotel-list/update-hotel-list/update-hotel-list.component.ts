import { Component } from '@angular/core';
import { HotelServiceService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-hotel-list',
  templateUrl: './update-hotel-list.component.html',
  styleUrl: './update-hotel-list.component.scss'
})
export class UpdateHotelListComponent {

  startForm !: FormGroup;
  hotelList: any;
  submitted!: boolean;
  hotelData: any;
  addFunctionality: any;
  isRatingFalse: any;

  constructor(private hotelService: HotelServiceService, private router: Router, private formBuilder: FormBuilder, private activatedRouteService: ActivatedRoute) { }

  ngOnInit(): void {

  this.getFunctionality();
  this.createForm();
  this.patchValue();
  }

  getFunctionality(){
    this.activatedRouteService.data.subscribe( data => {
      this.addFunctionality = data['addFunctionality']; 
    });
    this.hotelList = this.hotelService.getHotelList();
    if(!this.addFunctionality){
      this.fetchHotelData();
    }
  }

  createForm(){
    this.startForm = this.formBuilder.group({
      'hotelName': [null, [Validators.required]],
      'location': [null, [Validators.required]],
      'description': [null],
      'cuisineType': [null],
      'contact': [null, [Validators.required]],
      'hotelRating': [null],
      'seatingCapacity': [null],
      'hotelID': [null]
    })
  }

  fetchHotelData(){
     this.hotelData = this.hotelService.getHotelData();
  }

  patchValue(){
    if(!this.addFunctionality){
    this.startForm['patchValue'](this.hotelData[0]);
    }
  }

  checkRating(event: any){
    if(event > 10){
      this.isRatingFalse = true;
    }
    else{
      this.isRatingFalse = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.startForm.valid){
    this.hotelList = this.hotelList.map((value : any) => {
      if(value.hotelID == this.startForm.controls['hotelID'].value){
        value.hotelName = this.startForm.controls['hotelName'].value;
        value.location = this.startForm.controls['location'].value;
        value.description = this.startForm.controls['description'].value;
        value.cuisineType = this.startForm.controls['cuisineType'].value;
        value.contact = this.startForm.controls['contact'].value;
        value.hotelRating = this.startForm.controls['hotelRating'].value;
        value.seatingCapacity = this.startForm.controls['seatingCapacity'].value;
      }
     return value;
   });

   this.routeToHomePage();
  }
  else{
    alert('There must be something wrong');
  }
  }

  routeToHomePage(){
    sessionStorage.setItem('HotelList', JSON.stringify(this.hotelList));
    this.router.navigate(['journey/hotel-list']);
  }

  onBack(){
      this.router.navigate(['journey/hotel-list']);
  }

  onAdd(){
    this.submitted = true;
    const id = Math.floor(100000 + Math.random() * 900000);
    const payload = {
      "hotelID": id,
      "hotelName": this.startForm.controls['hotelName'].value,
      "description": this.startForm.controls['description'].value,
      "location": this.startForm.controls['location'].value,
      "cuisineType": this.startForm.controls['cuisineType'].value,
      "contact": this.startForm.controls['contact'].value,
      "hotelRating": this.startForm.controls['hotelRating'].value,
      "seatingCapacity": this.startForm.controls['seatingCapacity'].value
    }

    this.hotelList.push(payload);
    this.routeToHomePage();
  }

}
