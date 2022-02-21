import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdminService } from '../../service/admin.service';

import { ManagamentProductComponent } from './managament-product.component';

describe('ManagamentProductComponent', () => {
  let component: ManagamentProductComponent;
  let fixture: ComponentFixture<ManagamentProductComponent>;
  const service = {
    getOrderProduct: jasmine.createSpy(),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagamentProductComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide:  AdminService, useValue: service },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagamentProductComponent);
    component = fixture.componentInstance;
    service.getOrderProduct.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
