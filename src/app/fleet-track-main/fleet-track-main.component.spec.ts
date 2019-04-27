import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetTrackMainComponent } from './fleet-track-main.component';

describe('FleetTrackMainComponent', () => {
    let component: FleetTrackMainComponent;
    let fixture: ComponentFixture<FleetTrackMainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FleetTrackMainComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FleetTrackMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
