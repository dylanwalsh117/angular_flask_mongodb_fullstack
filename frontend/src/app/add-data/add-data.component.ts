import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PeopleService} from '../people.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  name = '';
  sex = '';
  houseNumber = '';
  street = '';
  city = '';
  eircode = '';

  constructor(
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(name, sex, houseNumber, street, city, eircode): void{
    alert('Adding Data');
    this.peopleService.addPeople(name, sex, houseNumber, street, city, eircode)
      .subscribe(() => {
      });
  }

}
