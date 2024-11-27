import { Component, inject, Inject } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { widget } from '../../model/dashboard';
import { DashboardService } from '../../services/dashboard.service';
import { Obj2Component } from '../widget/obj2.component';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  data: widget = {
    id:0,
    label:'OBJ2',
    content:Obj2Component
   }
   store = inject(DashboardService)
}
