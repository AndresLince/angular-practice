import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  @Input() client: { name: string, id: number, imageAlt: string };

  constructor() {
    this.client = { name: '', id: 0, imageAlt: '' };
  }

  getClientImageRoute(clientId: number) {
    return `https://randomuser.me/api/portraits/men/${clientId}.jpg`;
  }
}
