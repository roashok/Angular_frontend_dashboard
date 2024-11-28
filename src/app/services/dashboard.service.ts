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
  constructor() { }
}
