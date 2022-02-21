import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListProductComponent } from './list-product.component';
import { AdminService } from '../../service/admin.service';
import { of } from 'rxjs';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;
  const service = {
    getProduct: jasmine.createSpy(),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: AdminService, useValue: service },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;

    service.getProduct.and.returnValue(of());
 
    // countValue.next(0);
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
