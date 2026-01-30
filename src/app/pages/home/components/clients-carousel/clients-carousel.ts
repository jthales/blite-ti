import { Component, AfterViewInit, ElementRef, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-clients-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-carousel.html',
  styleUrl: './clients-carousel.css'
})
export class ClientsCarouselComponent implements AfterViewInit, OnDestroy {
  protected readonly clients = [
    { name: 'Cliente 1', logo: '/images/clients/client-1.svg' },
    { name: 'Cliente 2', logo: '/images/clients/client-2.svg' },
    { name: 'Cliente 3', logo: '/images/clients/client-3.svg' },
    { name: 'Cliente 4', logo: '/images/clients/client-4.svg' },
    { name: 'Cliente 5', logo: '/images/clients/client-5.svg' },
    { name: 'Cliente 6', logo: '/images/clients/client-6.svg' }
  ];

  private animationFrame: number | null = null;
  private scrollPosition = 0;
  private scrollSpeed = 0.5; // pixels per frame

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.startAnimation();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrame && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private startAnimation(): void {
    const track = this.elementRef.nativeElement.querySelector('.carousel-track') as HTMLElement;
    if (!track) return;

    const animate = () => {
      this.scrollPosition += this.scrollSpeed;

      // Reset quando chegar na metade (onde começa a duplicação)
      const halfWidth = track.scrollWidth / 2;
      if (this.scrollPosition >= halfWidth) {
        this.scrollPosition = 0;
      }

      track.style.transform = `translateX(-${this.scrollPosition}px)`;

      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }
}
