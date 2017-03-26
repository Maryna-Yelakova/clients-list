import {Component, OnInit} from '@angular/core';
import {ClientsService} from './clients.service';
import {Client} from './client';

@Component({
    moduleId: module.id,
    selector:'clients-list',
    templateUrl:'app.component.html'
})

export  class AppComponent implements OnInit{

    client: Client;
    constructor(private clientsService: ClientsService){}

    public clients: any;

    ngOnInit() {
        this.clientsService.getClientsList()
            .subscribe(
                data => {
                    this.clients = data._body.data;
                },
                error => {
                    console.log(error);
                });
    }
    activeClient: Client;

    selectClient(client) {
        this.activeClient = client;
        console.log(this.activeClient);
    }
}

