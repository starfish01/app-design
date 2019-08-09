import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndoridAppIconComponent } from './andorid-app-icon.component';

describe('AndoridAppIconComponent', () => {
  let component: AndoridAppIconComponent;
  let fixture: ComponentFixture<AndoridAppIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndoridAppIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndoridAppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
