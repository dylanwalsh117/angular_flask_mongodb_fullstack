import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataComponent } from './add-data/add-data.component';
import { RouterModule, Routes } from '@angular/router';

import {TableComponent} from './table/table.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TableComponent },
  { path: 'add', component: AddDataComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
