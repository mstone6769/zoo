import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { DogsService } from './dogs.service';

import { HttpModule } from '@angular/http';
const routes: Routes = [
  {
    path: '',
    component: DogsComponent
  }
];

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [DogsComponent],
  providers: [DogsService]
})
export class DogsModule { }
