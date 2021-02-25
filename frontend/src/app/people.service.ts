import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
// import {Listing} from './types';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  fetchPeople(): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api');
  }

  addPeople(name: string, sex: string, houseNumber: number, street: string,  city: string, eircode: string): Observable<any>{
    console.log( {name, sex, houseNumber, street, city, eircode});
    return this.http.post('http://127.0.0.1:5000/api', {name, sex, houseNumber, street, city, eircode}, httpOptions);

  }
  deletePeople(id: string): void{
    console.log(`http://127.0.0.1:5000/api/${id}`);
    this.http.delete(`http://127.0.0.1:5000/api/${id}`)
      .subscribe(() => {});
  }

  getPerson(id: string): Observable<any> {
    console.log(`http://127.0.0.1:5000/api/${id}`);
    return this.http.get(`http://127.0.0.1:5000/api/${id}`);
  }

  editPerson(person, id: string): void{
    console.log(person);
    this.http.put(`http://127.0.0.1:5000/api/${id}`, person)
      .subscribe(() => {});



  }


}
