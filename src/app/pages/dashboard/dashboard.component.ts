import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['Food', 'Entertainment', 'Bills'],
        datasets: [{
          data: [30, 20, 50],
          backgroundColor: ['#ff0000', '#00ff00', '#0000ff'],
          borderColor: '#ffffff',
          borderWidth: 1
        }]
      }
    });
  }
}
