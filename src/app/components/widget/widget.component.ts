import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WidgetOptionsComponent } from "./widget-options/widget-options.component";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-widget',
  imports: [ MatButtonModule, MatIconModule, WidgetOptionsComponent,CdkDrag,CdkDragPlaceholder],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)'
  }
})
export class WidgetComponent {
 data = input.required<widget>() 
 showOptions = signal(false)
 chart = viewChild.required<ElementRef>('chart');

 ngOnInit(){
  new Chart(this.chart().nativeElement,{
    type: (this.data().type == 'line') ?'line' : 'bar',
    data: {
      labels: this.data().contentx,
      datasets:[
        {
          label: this.data().namex,
          data: this.data().contenty
        }
      ],
    },
    options:{
      maintainAspectRatio:false,
      elements:{
        line:{
          tension: 0.4,
        }
      }
    }
  }
)
 }
}
