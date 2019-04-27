import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent implements OnInit, OnChanges {

    @ViewChild('googleMap') googleMapEle: ElementRef;
    @Input() vehicleId: number;

    private map: google.maps.Map;
    private marker: google.maps.Marker;

    private vehicle: Vehicle;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.vehicleId === undefined) {
            return;
        }
        this.vehicle = this.apiService.vehicles$.value.find(v => v.vehicleId === this.vehicleId);
        if (!this.vehicle) {
            return;
        }
        const mapProp = {
            center: new google.maps.LatLng(this.vehicle.latitude, this.vehicle.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        this.map = new google.maps.Map(this.googleMapEle.nativeElement, mapProp);
        this.showPosition();
    }

    showPosition() {
        const location = new google.maps.LatLng(this.vehicle.latitude, this.vehicle.longitude);
        this.map.panTo(location);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
            return;
        }
        this.marker.setPosition(location);
    }
}
