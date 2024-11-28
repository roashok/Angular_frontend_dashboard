import { Component, inject, Inject } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { widget } from '../../model/dashboard';
import { DashboardService } from '../../services/dashboard.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CdkDragDrop, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  imports: [WidgetComponent,MatButtonModule,MatIconModule,CdkDropList,CdkDropList,CdkDropListGroup],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
   store = inject(DashboardService)
   drop (event:CdkDragDrop<number,any>) {
     const {previousContainer, container} = event;
     this.store.updateWidgetPosition(previousContainer.data, container.data)
   }
}
