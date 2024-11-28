import { Component, inject, signal } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardAddComponent,WidgetComponent,MatButtonModule,MatIconModule,CdkDropList,CdkDropList,CdkDropListGroup],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
   store = inject(DashboardService)
   ShowMenu = signal(false)
   drop (event:CdkDragDrop<number,any>) {
     const {previousContainer, container} = event;
     this.store.updateWidgetPosition(previousContainer.data, container.data)
   }
}
