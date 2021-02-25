import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name = '';
  sex = '';
  number = '';
  street = '';
  city = '';
  eircode = '';
  id: string;
  tableData;

  constructor(
    private router: Router,
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.peopleService.getPerson(this.id)
      .subscribe( tableData => {
        this.tableData = tableData;
        this.tableData = this.tableData[0];
        console.log(this.tableData);


      });
  }
  onSubmit(): void {
    const person = {
      address: [{
        _id: this.id,
        city: this.city,
        number: this.number,
        street: this.street,
        eircode: this.eircode
      }],
      _id: this.id,
      name: this.name,
      sex: this.sex
    };
    this.peopleService.editPerson(person, this.id);
  }
}
