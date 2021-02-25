import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  people$: [];
  constructor(private peopleService: PeopleService) {
  }

  fetchPeople(): void {
    this.peopleService.fetchPeople().subscribe(dbdata => {
      this.people$ = dbdata;
    });
  }
}
