import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Confirmation, ConfirmationService, MessageService } from 'primeng/api';
import { AdminService } from '../../service/admin.service';
import { of } from 'rxjs';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

fdescribe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  const serviceAdmin = {
    addProduct: jasmine.createSpy(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        ConfirmDialogModule
      ],
      providers: [
        ConfirmationService,
        MessageService,
        { provide: AdminService, useValue: serviceAdmin },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.forms.valid).toBeFalsy();
});

  it('should display my-image.png', () => {
    const img = fixture.debugElement.nativeElement.querySelector('img');
    const spyError = spyOn(component, 'uploadimg' ).and.callThrough();
    img.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(spyError).toHaveBeenCalled();
});

  it('should create', () => {
    const mockTableData = {
      name: 'dddd',
      img: 'C:\\fakepath\\1111.jpg',
      price: 344,
      vote: 444,
      view: 444
    };
    const confirmationService: ConfirmationService = TestBed.get(ConfirmationService);
    serviceAdmin.addProduct.and.returnValue(of({ status: 200 }));
    component.onSubmit(mockTableData);
    expect(confirmationService).toBeDefined();
  });
});
