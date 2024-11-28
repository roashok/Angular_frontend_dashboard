import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { widget } from '../../../model/dashboard';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-widget-options',
  standalone:true,
  imports: [MatButtonModule,MatIconModule,MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
store = inject(DashboardService)
data =input.required<widget>();
showOptions = model<Boolean>(false)
}
