import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: false,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  public clients = [
    { name: 'Client 1', id: 1, imageAlt: 'Image of client 1' },
    { name: 'Client 2', id: 2, imageAlt: 'Image of client 2' },
    { name: 'Client 3', id: 3, imageAlt: 'Image of client 3' },
    { name: 'Client 4', id: 4, imageAlt: 'Image of client 4' },
    { name: 'Client 5', id: 5, imageAlt: 'Image of client 5' },
  ];
}
