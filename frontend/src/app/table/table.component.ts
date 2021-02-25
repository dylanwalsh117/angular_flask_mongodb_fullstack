import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableDataSrc: any;
  tableCols: string[] = ['name', 'sex', 'address', 'id', 'actions'];

  tableData: [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.fetchPeople()
      .subscribe( tableData => {
        this.tableData = tableData;
        this.tableDataSrc = new MatTableDataSource(this.tableData);
      });
  }

  deleteRegister(id: string): void{
    console.log('Inside delete function');
    if (confirm('You are deleting ' + id)) {
      this.peopleService.deletePeople(id);
      console.log('Deleted');
    }
  }

}
