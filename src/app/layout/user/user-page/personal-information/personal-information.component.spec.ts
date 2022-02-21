import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PersonalInformationComponent } from './personal-information.component';
import { ProductService } from 'src/app/layout/service/product.service';
import { of } from 'rxjs';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  const service ={
    getUserById: jasmine.createSpy(),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationComponent ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        { provide: ProductService, useValue: service },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    service.getUserById.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
