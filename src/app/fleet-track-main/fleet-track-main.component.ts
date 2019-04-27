import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-fleet-track-main',
    templateUrl: './fleet-track-main.component.html',
    styleUrls: ['./fleet-track-main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FleetTrackMainComponent implements OnInit {

    public vehicles$: Observable<Vehicle[]>;
    public loading$ = this.apiService.loading$;

    public searchQuery$ = new BehaviorSubject<string>('');

    constructor(private apiService: ApiService) {
        this.vehicles$ = combineLatest(this.searchQuery$, this.apiService.vehicles$).pipe(
            map(([query, vehicles]) => {
                if (query.trim().length === 0) {
                    return vehicles;
                }
                return vehicles.filter(v => fitlerWithQuery(query, v));
            })
        );
    }

    ngOnInit() {
        this.apiService.loadVehicle();

    }
}


function fitlerWithQuery(query: string, v: Vehicle) {
    const regex = new RegExp(query, 'gi');
    return v.vehicleName.match(regex) ||
        v.vehicleNumber.match(regex) ||
        v.vehicleMake.match(regex) ||
        v.vehicleModel.match(regex);
}
