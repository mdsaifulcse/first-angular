import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalbody={'header':'Modal Header','body':'Modal Body Content'}

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle='none';
  openModal(){
    this.displayStyle='block';
  }

  closeModal(){
    this.displayStyle='none';
  }

}
