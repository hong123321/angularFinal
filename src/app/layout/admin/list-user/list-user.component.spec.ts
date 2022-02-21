import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdminService } from '../../service/admin.service';

import { ListUserComponent } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  const service={
    getUser: jasmine.createSpy(),
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers:[
        {provide: AdminService, useValue: service}
      ]
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
});
