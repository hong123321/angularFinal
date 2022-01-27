import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagamentProductComponent } from './managament-product.component';

describe('ManagamentProductComponent', () => {
  let component: ManagamentProductComponent;
  let fixture: ComponentFixture<ManagamentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagamentProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagamentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
