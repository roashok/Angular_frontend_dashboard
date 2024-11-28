import { Injectable, signal } from '@angular/core';
import { widget } from '../model/dashboard';
import { Obj1Component } from '../components/widget/obj1.component';
import { Obj2Component } from '../components/widget/obj2.component';


@Injectable()
export class DashboardService {
  widgets = signal<widget[]>([
    {
      id:0,
      label:'OBJ1',
      columns:3,
      content:Obj1Component
     },
     {
      id:1,
      label:'OBJ2',
      content:Obj2Component
     },
     {
      id:2,
      label:'OBJ1',
      columns:3,
      content:Obj1Component
     },
     {
      id:3,
      label:'OBJ2',
      content:Obj2Component
     }
    ]
  )

  updateWidget(id: number ,widget:Partial<widget>){
    const index = this.widgets().findIndex(w => w.id === id)
    if(index !== -1){
      const newWidget = [...this.widgets()]
      newWidget[index] = {...newWidget[index],...widget}
      this.widgets.set(newWidget)
    }
  }
  removeWidget(id: number){
    this.widgets.set(this.widgets().filter(w => w.id !==id))
  } 
  updateWidgetPosition(sourceWidgetId:number, targetWidgetId:number){
    const sourceIndex = this.widgets().findIndex((w) => w.id === sourceWidgetId)
    if (sourceIndex === -1){
      return
    }

    const newWidget = [...this.widgets()];
    const sourceWidget = newWidget.splice(sourceIndex,1)[0];

    const targetIndex = newWidget.findIndex((w) => w.id === targetWidgetId)
    if (targetIndex === -1){
      return
    }

    const insertAt = targetIndex === sourceIndex ? targetIndex +1 : targetIndex

    newWidget.splice(insertAt,0,sourceWidget)
    this.widgets.set(newWidget)
  }
  constructor() { }
}
