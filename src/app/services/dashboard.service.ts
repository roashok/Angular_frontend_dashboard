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
      content:Obj1Component
     },
     {
      id:1,
      label:'OBJ2',
      content:Obj2Component
     }
    ]
  )
  constructor() { }
}
