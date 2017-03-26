import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { ClientsService } from './clients.service';
import { InMemClientsService }     from './clients.db';
import { ClientProfileComponent } from './client-profile'


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemClientsService)

    ],

    declarations: [
        AppComponent,
        ClientProfileComponent
    ],
    providers: [ClientsService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
