import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: false,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  public clients = [
    { name: 'Client 1', id: 1, imageAlt: 'Image of client 1', position: 'CEO', twitterAlias: '@client1' },
    { name: 'Client 2', id: 2, imageAlt: 'Image of client 2', position: 'Php developer', twitterAlias: '@client1' },
    { name: 'Client 3', id: 3, imageAlt: 'Image of client 3', position: 'Web UI', twitterAlias: '@client1' },
    { name: 'Client 4', id: 4, imageAlt: 'Image of client 4', position: 'Team lead', twitterAlias: '@client1' },
    { name: 'Client 5', id: 5, imageAlt: 'Image of client 5', position: 'Java developer', twitterAlias: '@client1' },
  ];
}
