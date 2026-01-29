import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ClientsCarouselComponent } from './components/clients-carousel/clients-carousel';
import { ServiceCardComponent } from './components/service-card/service-card';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { MethodSectionComponent } from './components/method-section/method-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ClientsCarouselComponent,
    ServiceCardComponent,
    ContactFormComponent,
    MethodSectionComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    const title = 'Blite TI | Desenvolvimento de Produtos Digitais';
    const description = 'A Blite impulsiona projetos e operações de tecnologia com squads de alta performance, método sólido e previsibilidade de ponta a ponta. Expertise técnica em tecnologia alinhada aos seus objetivos.';

    // Define o título da página
    this.titleService.setTitle(title);

    // Atualiza ou cria a meta description
    this.metaService.updateTag({ name: 'description', content: description });

    // Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.metaService.updateTag({ property: 'twitter:title', content: title });
    this.metaService.updateTag({ property: 'twitter:description', content: description });
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
  }

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
