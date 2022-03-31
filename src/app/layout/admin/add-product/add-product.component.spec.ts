import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Confirmation, ConfirmationService, MessageService } from 'primeng/api';
import { AdminService } from '../../service/admin.service';
import { Observable, of, Subscriber } from 'rxjs';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  const serviceAdmin = {
      addProduct: jasmine.createSpy(),
    };
  const messageService = jasmine.createSpyObj('messageService', ['add']);
  const confirmationService = jasmine.createSpyObj('confirmationService', ['confirm']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        ConfirmDialogModule
      ],
      providers: [
        { provide: MessageService, useValue: messageService
        },
        { provide: ConfirmationService, useValue: confirmationService
        },
        { provide: AdminService, useValue: serviceAdmin },
        MessageService,
        ConfirmationService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.forms.valid).toBeFalsy();
  });

  it('should call add', () => {
    const mockTableData = {
      target: {
        files: [
          { type: 'abc' }
        ]
      }
    };

    component.uploadimg(mockTableData);
    spyOn(messageService, 'add');
    const val = messageService.add();
    expect(val).toHaveBeenCalled();
  });

  it('should create', () => {
    const mockTableDatas = {
      name: 'dddd',
      img: 'C:\\fakepath\\1111.jpg',
      price: 344,
      vote: 444,
      view: 444
    };
    // spyOn(serviceAdmin, 'addProduct').and.returnValue(of(  ));
    serviceAdmin.addProduct.and.returnValue(of({ status: 200 }));
    component.onSubmit(mockTableDatas);
    
    const mockTableData2 = {
      name: 'dddd',
      img: '1111.jpg',
      price: 344,
      vote: 444,
      view: 444
    };
    serviceAdmin.addProduct(mockTableData2).and.returnValue(of({ status: 200 }));
  });

});
