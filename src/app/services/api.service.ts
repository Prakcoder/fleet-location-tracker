import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { catchError, flatMap, map, take } from 'rxjs/operators';

import { MOCK_DATA } from '../constants/data';

@Injectable()
export class ApiService {

    private baseUrl = 'https://api.fleetx.io/api/v1/';
    public vehicles$ = new BehaviorSubject<Vehicle[]>([]);
    constructor(private http: HttpClient) {

    }

    public loadVehicle() {
        const url = this.baseUrl + 'analytics/live/new/eJwFwYENACAIA7CLlohghHNExhnebiuij6nNio1pHTC9RA4uuC$J4xFV$OTpCzE=';
        return interval(5000)
            .pipe(flatMap(() => this.loadVehicleInner(url)))
            .subscribe(vehicles => {
                this.vehicles$.next(vehicles);
            });
    }

    private loadVehicleInner(url: string) {
        return this.http.get<ApiResponse>(url).pipe(
            map(response => response.vehicles),
            catchError(error => {
                // Request is failing due to Access-Control-Allow-Origin set 'https://www.fleetx.io' orgin only in response
                // So I am using mock data
                return this.getMockData();
            })
        );
    }

    private getMockData(): Observable<Vehicle[]> {
        return of(MOCK_DATA.vehicles).pipe(take(1));
    }
}

interface ApiResponse {
    vehicles: Vehicle[];
}
