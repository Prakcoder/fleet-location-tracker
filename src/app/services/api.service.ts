import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MOCK_DATA } from '../constants/data';

@Injectable()
export class ApiService {

    private baseUrl = 'https://api.fleetx.io/api/v1/';
    constructor(private http: HttpClient) {

    }

    public loadVehicle() {
        const url = this.baseUrl + 'analytics/live/new/eJwFwYENACAIA7CLlohghHNExhnebiuij6nNio1pHTC9RA4uuC$J4xFV$OTpCzE=';
        return this.http.get(url).pipe(
            map(response => (response as any).vehicles),
            catchError(error => {
                // Request is failing due to Access-Control-Allow-Origin set 'https://www.fleetx.io' orgin only in response
                // So I am using mock data
                return this.getMockData();
            })
        );
    }

    private getMockData() {
        return of(MOCK_DATA.vehicles);
    }
}
