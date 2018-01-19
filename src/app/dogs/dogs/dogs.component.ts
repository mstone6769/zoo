import { Component, OnInit } from '@angular/core';

import { DogsService } from '../dogs.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  public breeds: Observable<String[]>;
  constructor(private dogsService: DogsService) { }


  ngOnInit() {
  }

  goGetBreeds() {
    this.breeds = this.dogsService.getBreeds();
  }

}
