import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected readonly menuItems = [
    { label: 'O que fazemos', href: '#method', external: false },
    { label: 'Vagas', href: 'https://vagas.blite.com.br/jobs', external: true }
  ];

  protected readonly contactButton = {
    label: 'Entre em contato',
    href: 'https://wa.me/5511912294342',
    external: true
  };

  protected isMenuOpen = false;
  protected isScrolled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  ngOnDestroy() {
    // Cleanup
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  private checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50; // Ativa após 50px de scroll
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToSection(href: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!isPlatformBrowser(this.platformId) || href.startsWith('http')) {
      return;
    }

    if (href.startsWith('#')) {
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        const headerHeight = 100; // Altura aproximada do header fixo
        const startPosition = window.pageYOffset;
        const elementPosition = element.getBoundingClientRect().top + startPosition;
        const targetPosition = Math.max(0, elementPosition - headerHeight);
        const distance = targetPosition - startPosition;
        const duration = 800; // Duração da animação em ms
        let start: number | null = null;

        const animateScroll = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const progressPercent = Math.min(progress / duration, 1);

          // Easing function (ease-in-out)
          const ease = progressPercent < 0.5
            ? 2 * progressPercent * progressPercent
            : 1 - Math.pow(-2 * progressPercent + 2, 2) / 2;

          window.scrollTo(0, startPosition + distance * ease);

          if (progress < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    }
  }
}
