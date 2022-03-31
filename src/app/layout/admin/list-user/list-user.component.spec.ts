import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdminService } from '../../service/admin.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListUserComponent } from './list-user.component';
import { DialogService } from 'primeng/dynamicdialog';

fdescribe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  const service = {
    getUser: jasmine.createSpy(),
  };
  const dialogService = jasmine.createSpyObj('dialogService', ['open']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {provide: AdminService, useValue: service},
        {provide: DialogService, useValue: dialogService  }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;

    service.getUser.and.returnValue(of());
 
    // countValue.next(0);
    fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get user', () => {
    const user = [{
      address: 'HCM',
      age: '12',
      email: 'lexuanhong@gmail.com',
      id: '23',
      phone: '123456789',
      username: 'hongle123'
    }];
    service.getUser().subscribe(data => {
      expect(data).toEqual(user, 'should return the employee');
    });
  });

  it('should open dyalog', () => {
    // dialogService = TestBed.get(DialogService);

    component.addUser();
    const mySpy = spyOn(dialogService, 'open');
    expect(mySpy).toHaveBeenCalled();
  });
});
