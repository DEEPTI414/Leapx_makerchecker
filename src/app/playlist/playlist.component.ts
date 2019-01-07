import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent  {

  /*tiles: Tile[] = [
    {text: '1', cols: 1, rows: 1, color: 'blue'},
    {text: '2', cols: 1, rows: 1, color: 'blue'},
    {text: '3', cols: 1, rows: 1, color: 'blue'},
    {text: '4', cols: 1, rows: 1, color: 'blue'},
    {text: '5', cols: 1, rows: 1, color: 'blue'},
    {text: '6', cols: 1, rows: 1, color: 'blue'},
    {text: '7', cols: 1, rows: 1, color: 'blue'},
    {text: '8', cols: 1, rows: 1, color: 'blue'},
    {text: '9', cols: 1, rows: 1, color: 'blue'},
    {text: '10', cols: 1, rows: 1, color: 'blue'},
    {text: '11', cols: 1, rows: 1, color: 'blue'},
    {text: '12', cols: 1, rows: 1, color: 'blue'}

  ];*/


}
