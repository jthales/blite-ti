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
    { label: 'O que fazemos', href: '#services', external: false },
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
    // Cleanup se necessário
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
}
