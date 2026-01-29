import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
