import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDriverComponent } from './card-driver.component';

describe('CardDriverComponent', () => {
  let component: CardDriverComponent;
  let fixture: ComponentFixture<CardDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
