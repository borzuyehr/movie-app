import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from "src/app/API.service";
import { Movies } from "src/app/models/movies";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent implements OnInit {
  
  constructor(private api: APIService, private fb: FormBuilder) { }
  response: any;
  output: string;
  public createForm: FormGroup;
  movies: Array<Movies>;
  expanded = [];
  
  async ngOnInit(): Promise<void> {

    await this.api.ListMovies().then(event => {
      this.movies = event;
    });

    
  }

}


