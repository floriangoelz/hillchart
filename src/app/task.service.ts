import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = [];

  constructor(  ){
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
  }
    
    getTasks() {
    return this.tasks;
    }
    
    clearTasks() {
      console.log('hi');
    this.tasks = [];
    return this.tasks;
    }
}
