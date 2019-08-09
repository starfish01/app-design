import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosAppIconComponent } from './ios-app-icon.component';

describe('IosAppIconComponent', () => {
  let component: IosAppIconComponent;
  let fixture: ComponentFixture<IosAppIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosAppIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosAppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
