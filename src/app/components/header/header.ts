import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
