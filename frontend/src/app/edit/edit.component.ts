import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../people.service';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  angularForm: FormGroup;
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
        console.log('This is what we get from table data');
        console.log(this.tableData);

        this.angularForm = new FormGroup({
          // _id: new FormControl(this.tableData.id),
          name: new FormControl(this.tableData.name, Validators.required),
          sex: new FormControl(this.tableData.sex.id, Validators.required),
          number: new FormControl(this.tableData.address.number, Validators.required),
          street: new FormControl(this.tableData.address.street, Validators.required),
          city: new FormControl(this.tableData.address.city, Validators.required),
          eircode: new FormControl(this.tableData.address.eircode, [Validators.required, Validators.maxLength(8)])

        });


      });
  }
  onSubmit(person): void {
    console.log('Inside of OnSubmit');
    console.log(this.tableData);
    const editPerson = {
      address: [{
        _id: this.tableData.address.id,
        city: person.city,
        number: person.number,
        street: person.street,
        eircode: person.eircode
      }],
      _id: this.tableData.id,
      name: person.name,
      sex: person.sex
    };
    console.log('This is Edit Person');
    console.log(editPerson);
    this.peopleService.editPerson(editPerson, this.id);

  }
}
