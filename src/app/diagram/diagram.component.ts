import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  _tasks = [];

  @Input() get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    this._tasks = value;
    this.drawDiagram();
  }

  constructor() {
  }

  hill(x){
    return 1/((Math.pow(x,2) + 1));
  }

  drawDiagram() {
    var canvas = <HTMLCanvasElement> document.getElementById('diagram');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.moveTo(375, 400);
      ctx.lineTo(375, 0);
      ctx.strokeStyle = "#B1B3B3";
      ctx.stroke();
      ctx.moveTo(10, 378);
      
      ctx.beginPath();
      for(var i = -3.9; i <= 3.9; i = i + 0.01){
        var y = this.hill(i);
        ctx.lineTo((i + 4)*93.75, 400 - (350 * y));
      }
      ctx.strokeStyle = "#06c";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.font = "20px Arial";
      ctx.fillText("uncertainty", 10, 25);
      ctx.fillText("certainty", 665, 25);

      for(let i = 0; i < this.tasks.length; i++){
        ctx.beginPath();
        let x = this.tasks[i].position; //this.taskService.tasks[i].position;
        ctx.arc(x * 7.5, 400-(350*this.hill(x/12.5 - 4)), 7, 0, 2 * Math.PI)
        ctx.strokeStyle = this.tasks[i].color;
        ctx.stroke();
        ctx.fillStyle = this.tasks[i].color;
        ctx.fill();
        ctx.beginPath();
      }
    }

  }

  ngOnInit() {
    this.drawDiagram();
  }

}
