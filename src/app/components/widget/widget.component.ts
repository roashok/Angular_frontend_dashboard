import { Component, input, signal } from '@angular/core';
import { widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WidgetOptionsComponent } from "./widget-options/widget-options.component";
import { CdkDrag, CdkDragHandle, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIconModule, WidgetOptionsComponent,CdkDrag,CdkDragPlaceholder],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  host: {
    '[style.grid-area]': '"span " + (data().rows ?? 1) + "/ span " + (data().columns ?? 1)'
  }
})
export class WidgetComponent {
 data = input.required<widget>() 
 showOptions = signal(false)
}
