import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  newTaskForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    color: new FormControl(''),
    position: new FormControl('')
  });
  constructor(
    private taskService: TaskService
  ) {
  }
  onSubmit(){
    const {title} = this.newTaskForm.value;
    const {id} = this.newTaskForm.value;
    const {description} = this.newTaskForm.value;
    const {date} = this.newTaskForm.value;
    const {color} = this.newTaskForm.value;
    const {position} = this.newTaskForm.value;
    this.taskService.addTask({id: id, title: title, description: description, date: date, color: color, position: position});
    console.log(this.taskService.tasks);
  }

}
