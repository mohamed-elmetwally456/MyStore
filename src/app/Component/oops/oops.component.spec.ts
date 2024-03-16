import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsComponent } from './oops.component';

describe('OopsComponent', () => {
  let component: OopsComponent;
  let fixture: ComponentFixture<OopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
