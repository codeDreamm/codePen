import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookExplComponent } from './life-cycle-hook-expl.component';

describe('LifeCycleHookExplComponent', () => {
  let component: LifeCycleHookExplComponent;
  let fixture: ComponentFixture<LifeCycleHookExplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleHookExplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHookExplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
