import { of } from 'rxjs';
import { ColorsService } from 'shared-lib';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleComponent } from './rectangle.component';

describe('RectangleComponent', () => {
  let component: RectangleComponent;
  let fixture: ComponentFixture<RectangleComponent>;
  let x: number;
  let y: number;
  let colorService: ColorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RectangleComponent],
      providers: [
        { provide: ColorsService, useValue: { getColors: () => of({ new_color: 'bdc3c7' }) } },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    x = 0;
    y = 0;
    fixture = TestBed.createComponent(RectangleComponent);
    component = fixture.componentInstance;
    colorService = TestBed.inject(ColorsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load colors', () => {
    spyOn(colorService, 'getColors').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(colorService.getColors).toHaveBeenCalled();
    expect(component.color).toEqual('bdc3c7');
  });
});
