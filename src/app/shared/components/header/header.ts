import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
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
    href: '#contact',
    external: false
  };

  protected isMenuOpen = false;
  protected isScrolled = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly elementRef: ElementRef<HTMLElement>
  ) {}

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.isMenuOpen || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const target = event.target as Node | null;
    const root = this.elementRef.nativeElement;
    if (target && root.contains(target)) {
      return;
    }

    this.closeMenu();
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

  handleMenuClick(item: { href: string; external: boolean }, event?: Event, closeMenuAfter = false) {
    if (closeMenuAfter) {
      this.closeMenu();
    }

    if (event) {
      event.preventDefault();
    }

    if (item.external) {
      if (isPlatformBrowser(this.platformId)) {
        window.open(item.href, '_blank', 'noopener');
      }
      return;
    }

    this.scrollToSection(item.href);
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
