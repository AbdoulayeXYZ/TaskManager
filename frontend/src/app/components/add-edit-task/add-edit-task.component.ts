import { Task } from './../../interfaces/task';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrl: './add-edit-task.component.css'
})
export class AddEditTaskComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  addTask(){
  }
}
