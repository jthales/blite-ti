import { Component, ViewChild, ElementRef, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroVideo') videoElement?: ElementRef<HTMLVideoElement>;
  protected readonly videoSrc = '/videos/video_topo.mov';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.videoElement) {
      const video = this.videoElement.nativeElement;

      // Remove todos os atributos de controle
      video.removeAttribute('controls');
      video.controls = false;

      // Garante que está muted
      video.muted = true;
      video.defaultMuted = true;

      // Força o play
      setTimeout(() => {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay iniciou com sucesso
              video.setAttribute('playsinline', '');
            })
            .catch((error) => {
              // Autoplay foi prevenido, tenta novamente após interação do usuário
              console.warn('Autoplay prevented:', error);
              document.addEventListener('click', () => {
                video.play().catch(() => {});
              }, { once: true });
            });
        }
      }, 100);
    }
  }
}
