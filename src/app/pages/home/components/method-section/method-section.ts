import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-method-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './method-section.html',
  styleUrl: './method-section.css'
})
export class MethodSectionComponent {
  protected readonly methodCards = [
    {
      id: 1,
      title: 'Squad as a Service',
      description: 'Times dedicados, governança próxima e presença real no dia a dia.',
      image: '/images/methods/squad.svg',
      gridClass: ''
    },
    {
      id: 2,
      title: 'Product Delivery',
      description: 'Entrega ponta a ponta com método ágil, QA e arquitetura sólida.',
      image: '/images/methods/product.svg',
      gridClass: ''
    },
    {
      id: 3,
      title: 'Tech Consulting & Engineering',
      description: 'Arquitetos, Engenheiros, QA, Cloud, Sustentação e Suporte especializado para desafios críticos.',
      image: '/images/methods/tech.svg',
      gridClass: 'method-card-tall'
    },
    {
      id: 4,
      title: 'Talent Acquisition',
      description: 'Curadoria, recrutamento e seleção de talentos. Capacidade real, não apenas contratação.',
      image: '/images/methods/talent.svg',
      gridClass: 'method-card-wide'
    }
  ];
}
