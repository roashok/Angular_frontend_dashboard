import { Component, input, signal } from '@angular/core';
import { widget } from '../../model/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WidgetOptionsComponent } from "./widget-options/widget-options.component";

@Component({
  selector: 'app-widget',
  imports: [NgComponentOutlet, MatButtonModule, MatIconModule, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
 data = input.required<widget>() 
 showOptions = signal(false)
}
