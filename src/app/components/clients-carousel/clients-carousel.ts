import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-carousel.html',
  styleUrl: './clients-carousel.css'
})
export class ClientsCarouselComponent {
  protected readonly clients = [
    { name: 'Cliente 1', logo: '/images/clients/client-1.svg' },
    { name: 'Cliente 2', logo: '/images/clients/client-2.svg' },
    { name: 'Cliente 3', logo: '/images/clients/client-3.svg' },
    { name: 'Cliente 4', logo: '/images/clients/client-4.svg' },
    { name: 'Cliente 5', logo: '/images/clients/client-5.svg' },
    { name: 'Cliente 6', logo: '/images/clients/client-6.svg' }
  ];

  protected currentIndex = 0;

  nextSlide() {
    const maxIndex = this.clients.length - 3; // Mostra 3 no mobile
    this.currentIndex = (this.currentIndex + 1) % (maxIndex + 1);
  }

  prevSlide() {
    const maxIndex = this.clients.length - 3;
    this.currentIndex = this.currentIndex === 0 ? maxIndex : this.currentIndex - 1;
  }
}
