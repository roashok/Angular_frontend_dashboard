import { Injectable, signal } from '@angular/core';
import { widget } from '../model/dashboard';
@Injectable()
export class DashboardService {
   mock = [[
    { year: 2010, count: 10, count2: 28, count3: 32},
    { year: 2011, count: 20 ,count2: 25, count3: 54},
    { year: 2012, count: 15 , count2: 20, count3: 23},
    { year: 2013, count: 25 , count2:19, count3: 64},
    { year: 2014, count: 22 , count2:13, count3: 75},
    { year: 2015, count: 30 ,count2: 41, count3: 43},
    { year: 2016, count: 28 , count2:21, count3: 84},
  ]
  ,[
    { year: 2009, count: 10, count2: 28, count3: 41},
    { year: 2010, count: 20 ,count2: 25, count3: 94},
    { year: 2011, count: 15 , count2: 20, count3: 93},
    { year: 2015, count: 25 , count2:19, count3: 23},
    { year: 2016, count: 22 , count2:13, count3: 43},
    { year: 2012, count: 30 ,count2: 41, count3: 9},
    { year: 2017, count: 28 , count2:21, count3: 49},
  ]];
  currlength = 1
  widgets = signal<widget[]>([
    {
      id:0,
      type:'bar',
      title:"numbers",
      namex: "integer",
      contentx:this.mock[0].map((m)=>m.year),
      contenty:this.mock[0].map((m)=>m.count)
     },
     {
      id:1,
      type:'line',
      namex:"integer",
      contentx:this.mock[0].map((m)=>m.year),
      contenty:this.mock[0].map((m)=>m.count2)
     },
    ]
  )
  addWidget(dataset: number,title:string, axis:number, type:string){
    this.currlength += 1;
    const curraxis= (axis == 1) ? "count" : ((axis == 3) ? "count3" : "count2")
    const w = {
      id: this.currlength,
      type: type,
      namex:title,
      contentx:this.mock[dataset-1].map((m)=>m.year),
      contenty:this.mock[dataset-1].map((m)=>m[curraxis])  
    }
    this.widgets.set([...this.widgets(),{...w}])
  }
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
