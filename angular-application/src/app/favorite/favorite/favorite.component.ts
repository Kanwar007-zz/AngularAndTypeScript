import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isFavorite :boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    console.log('value to display using favorite component');
  }
}
