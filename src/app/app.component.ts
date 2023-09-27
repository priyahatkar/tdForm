import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdForm';
  // secrectQuestionDefault : string = 'fvrtBook';
  @ViewChild('signInForm') signInForm !:NgForm;
  public modeOfContact =[
    {moc : 'By Email', id : 123},
    {moc : 'By Phone', id : 345}
  ]
  obj ={
    answer: "JavaScript: The Good Parts",
    contactMode: "By Phone",
    secrectQuestion: "fvrtBook",
    subscribeToEmail: true,
    userInfo: {userName: 'priya', email: 'priyahatkar@gmail.com'}
}
  // onFormSubmit(signInForm :NgForm){
  //   if(signInForm.valid){
  //     console.log(signInForm.value);
  //     signInForm.reset()
  //   }
  // }

  onFormSubmit(){
    if(this.signInForm.valid){
      console.log(this.signInForm.value);
      this.signInForm.reset()
    }
  }
  onUpdateForm(){
    this.signInForm.form.patchValue(this.obj)
  }
}
