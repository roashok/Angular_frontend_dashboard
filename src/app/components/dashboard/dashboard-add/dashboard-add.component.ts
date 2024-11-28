import { Component, inject, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DashboardService } from '../../../services/dashboard.service';
@Component({
  selector: 'app-dashboard-add',
  imports: [MatButtonModule,MatIconModule,MatFormFieldModule, MatSelectModule],
  templateUrl: './dashboard-add.component.html',
  styleUrl: './dashboard-add.component.scss'
})
export class DashboardAddComponent {
  store = inject(DashboardService)
  ShowMenu = model<Boolean>(false)
  dataset = signal<number>(0)
  xaxis= signal<number>(0)
  title = signal<string>("integer")
  type= signal<string>("")
}
