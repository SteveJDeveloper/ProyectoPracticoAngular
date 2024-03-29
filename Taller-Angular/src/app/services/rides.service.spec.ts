import { TestBed } from '@angular/core/testing';

import { Ride } from '../models/rides.interface';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from "../../environments/environment";
import { RidesService } from '../../app/services/rides.service';
import { mockRide } from '../modules/shared/mocks/rides.mock';

const mockRideList: Ride[] = [mockRide];


describe('RidesService', () => {
  let service: RidesService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl + 'rides';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RidesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a list of rides', (doneFn) => {
    service.getRideList().subscribe((data) => {
      expect(data).toEqual(mockRideList);
      doneFn();
    });
    const url = apiUrl;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockRideList);
  });
});
