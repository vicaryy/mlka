import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanAirComponent } from './clean-air.component';

describe('CleanAirComponent', () => {
  let component: CleanAirComponent;
  let fixture: ComponentFixture<CleanAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanAirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleanAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
