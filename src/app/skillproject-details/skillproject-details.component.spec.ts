import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillprojectDetailsComponent } from './skillproject-details.component';

describe('SkillprojectDetailsComponent', () => {
  let component: SkillprojectDetailsComponent;
  let fixture: ComponentFixture<SkillprojectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillprojectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillprojectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
