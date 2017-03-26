import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { ClientsService } from './clients.service';
import { InMemClientsService }     from './clients.db';


@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemClientsService),
    ],

    declarations: [
        AppComponent
    ],
    providers: [ClientsService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
