import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obj1Component } from './obj1.component';

describe('Obj1Component', () => {
  let component: Obj1Component;
  let fixture: ComponentFixture<Obj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obj1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
