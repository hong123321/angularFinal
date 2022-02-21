import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  // const service = jasmine.createSpyObj('service', ['getListCart', 'getPopular', 'getCartItem', 'postListCart']);

  const service = {
    countValue: new Subject(),
    getListCart: jasmine.createSpy(),
    getPopular: jasmine.createSpy(),
    getCartItem: jasmine.createSpy(),
    postListCart: jasmine.createSpy(),
    name:()=>{}
  };


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        MessageService, DialogService,
        { provide: ProductService, useValue: service },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    service.getPopular.and.returnValue(of());
    service.getCartItem.and.returnValue(of());
    // countValue.next(0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('should call postToCart when call addToCart', () => {
  //   spyOn(component, 'postToCart');
  //   service.getListCart.and.returnValue(of({status: 200}));
  //   component.addToCart(0);
  //   expect(component.postToCart).toHaveBeenCalled();
  // });
});
