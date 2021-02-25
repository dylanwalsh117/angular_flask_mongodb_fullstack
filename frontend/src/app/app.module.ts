import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { AddDataComponent } from './add-data/add-data.component';
import { TableComponent } from './table/table.component';
import { PeopleService } from './people.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AddDataComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
