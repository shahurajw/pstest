import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SpacexService } from '../_services/spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  programs = [];
  links = [];
  isSuccessful = false;
  errorMessage = '';
  limit = 8;
  launch_success = '';
  land_success = '';
  launch_year = '';
  loading = true;
  constructor(private spacexservice: SpacexService) { }

  ngOnInit(): void {
  	this.spacexservice.getPrograms(this.limit, this.launch_success, this.land_success, this.launch_year).subscribe(
      data => {
      	this.programs = data;
      	this.loading = false;
      	//console.log(data.length);
      },
      err => {
        /*this.errorMessage = err.error.message;
        this.isSuccessful = false;*/
      }
    );
  }
  launchYear(year:any) {
  	this.loading = true;
  	this.launch_year = year;
  	this.searchprograms();
  }  
  launchsuccess(issuccess:any) {
  	this.loading = true;
  	this.launch_success = issuccess;
  	this.searchprograms();
  }  
  landsuccess(island:any) {
  	this.loading = true;
  	this.land_success = island;
  	this.searchprograms();
  }
  searchprograms() {
  	this.spacexservice.getPrograms(this.limit, this.launch_success, this.land_success, this.launch_year).subscribe(
      data => {
      	this.loading = false;
      	this.programs = data;
      },
      err => {
      }
    );
  }
  resetFilters() {
	this.limit = 8;
	this.launch_success = '';
	this.land_success = '';
	this.launch_year = '';
	this.loading = true;
  	this.searchprograms();
  }
}
