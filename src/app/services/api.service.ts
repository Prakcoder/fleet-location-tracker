import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    private baseUrl = 'https://api.fleetx.io/api/v1/';
    constructor(private http: HttpClient) {

    }

    public loadVehicle() {
        const url = this.baseUrl + 'analytics/live/new/eJwFwYENACAIA7CLlohghHNExhnebiuij6nNio1pHTC9RA4uuC$J4xFV$OTpCzE=';
        return this.http.get(url).pipe(
            map(response => (response as any).vehicles)
        );

    }
}
