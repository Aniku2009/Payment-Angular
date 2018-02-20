import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecticityComponent } from './electicity.component';

describe('ElecticityComponent', () => {
  let component: ElecticityComponent;
  let fixture: ComponentFixture<ElecticityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecticityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecticityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
