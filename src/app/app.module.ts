import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FleetTrackMainModule } from './fleet-track-main/fleet-track-main.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FleetTrackMainModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
