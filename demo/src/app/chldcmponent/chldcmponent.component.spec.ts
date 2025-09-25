import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChldcmponentComponent } from './chldcmponent.component';

describe('ChldcmponentComponent', () => {
  let component: ChldcmponentComponent;
  let fixture: ComponentFixture<ChldcmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChldcmponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChldcmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
