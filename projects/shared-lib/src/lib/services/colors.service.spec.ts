import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ColorsService } from './colors.service';

describe('ColorsService', () => {
  let service: ColorsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getColors', () => {
    it('should get colors', () => {
      service.getColors().subscribe((res) => {
        expect(res.success).toBeTruthy();
      });

      const req = httpTestingController.expectOne('http://www.colr.org/json/color/random');
      req.flush({
        colors: [
          {
            timestamp: 1187574670,
            hex: 'cfe5ec',
            id: 47168,
            tags: [
              {
                timestamp: 1108110851,
                id: 2591,
                name: 'blue',
              },
              {
                timestamp: 1108110855,
                id: 2896,
                name: 'the',
              },
              {
                timestamp: 1108110854,
                id: 2752,
                name: 'air',
              },
            ],
          },
        ],
        schemes: [],
        schemes_history: {},
        success: true,
        colors_history: {
          cfe5ec: [
            {
              d_count: 0,
              id: '2591',
              a_count: 1,
              name: 'blue',
            },
            {
              d_count: 0,
              id: '2896',
              a_count: 1,
              name: 'the',
            },
            {
              d_count: 0,
              id: '2752',
              a_count: 1,
              name: 'air',
            },
          ],
        },
        messages: [],
        new_color: 'cfe5ec',
      });
      httpTestingController.verify();
    });
  });
});
