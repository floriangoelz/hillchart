import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {

  constructor() { }

  hill(x){
    return 1/((Math.pow(x,2) + 1));
  }

  drawDiagram() {
    var canvas = <HTMLCanvasElement> document.getElementById('diagram');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.moveTo(375, 400);
      ctx.lineTo(375, 0);
      ctx.strokeStyle = "#B1B3B3";
      ctx.stroke();
      ctx.moveTo(10, 378);
      
      ctx.beginPath();
      for(var i = -3.9; i <= 3.9; i = i + 0.01){
        var y = this.hill(i);
        console.log((i + 4)*93.75, y);
        ctx.lineTo((i + 4)*93.75, 400 - (350 * y));
        //console.log(Math.round((i + 4)*93.75) + " " + Math.round(400 - (300 * y)))
      }
      ctx.strokeStyle = "#06c";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.font = "20px Arial"
      ctx.fillText("uncertainty", 10, 25);
      ctx.fillText("certainty", 665, 25);
    }

  }
  ngOnInit() {
    this.drawDiagram();
  }

}
