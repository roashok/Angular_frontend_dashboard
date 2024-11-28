import { Injectable, signal } from '@angular/core';
import { widget } from '../model/dashboard';
@Injectable()
export class DashboardService {
   Mock = [
    { year: 2010, count: 10, count2: 28 },
    { year: 2011, count: 20 ,count2: 25},
    { year: 2012, count: 15 , count2: 20},
    { year: 2013, count: 25 , count2:19},
    { year: 2014, count: 22 , count2:13},
    { year: 2015, count: 30 ,count2: 41},
    { year: 2016, count: 28 , count2:21},
  ];
  widgets = signal<widget[]>([
    {
      id:0,
      type:'bar',
      title:"numbers",
      namex: "integers",
      contentx:this.Mock.map((m)=>m.year),
      contenty:this.Mock.map((m)=>m.count)
     },
     {
      id:1,
      type:'line',
      namex:"count",
      contentx:this.Mock.map((m)=>m.year),
      contenty:this.Mock.map((m)=>m.count2)
     },
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
