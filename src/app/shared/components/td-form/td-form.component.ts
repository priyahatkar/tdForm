import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {
@ViewChild('signInForm') signInForm !: NgForm
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(){
    console.log(this.signInForm.value);
    
  }
}
