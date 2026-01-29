import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { ClientsCarouselComponent } from './components/clients-carousel/clients-carousel';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ServiceCardComponent } from './components/service-card/service-card';
import { MethodSectionComponent } from './components/method-section/method-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactFormComponent, ClientsCarouselComponent, HeroSectionComponent, ServiceCardComponent, MethodSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blite-ti');

  protected readonly services = [
    {
      icon: '/images/icons/icone-box-1.svg',
      title: 'Aceleração Ágil e Certeira',
      description: 'Aumentamos a velocidade e a qualidade das entregas de TI, com foco em resultado e aprendizado contínuo.'
    },
    {
      icon: '/images/icons/icone-box-2.svg',
      title: 'Escala Tecnológica Eficiente',
      description: 'Expandimos sua capacidade com método, governança e visibilidade para escalar sem perder controle.'
    },
    {
      icon: '/images/icons/icone-box-3.svg',
      title: 'Performance Sustentada',
      description: 'Garantimos estabilidade, segurança e performance contínua para operações que não podem parar.'
    }
  ];
}
