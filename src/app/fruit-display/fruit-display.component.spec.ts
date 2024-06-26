import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitDisplayComponent } from './fruit-display.component';

describe('FruitDisplayComponent', () => {
  let component: FruitDisplayComponent;
  let fixture: ComponentFixture<FruitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
