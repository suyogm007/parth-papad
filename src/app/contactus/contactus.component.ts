import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  feedbackForm: FormGroup
  isSubmitted = false
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      name: ['',[Validators.required]],
      email:  ['',[Validators.required, Validators.email]],
      contact:  ['',[Validators.required, Validators.maxLength(10)]],
      feedback:  ['',[Validators.required]],
    })
  }

  onSubmit(feedbackForm) {
    this.isSubmitted = true
    console.log(feedbackForm.valid);
    console.log(feedbackForm.value.name);
    console.log(feedbackForm.value.email);
    console.log(feedbackForm.value.contact);
    console.log(feedbackForm.value.feedback);
    
  }
}
