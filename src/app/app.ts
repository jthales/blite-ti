import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { ClientsCarouselComponent } from './components/clients-carousel/clients-carousel';
import { HeroSectionComponent } from './components/hero-section/hero-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContactFormComponent, ClientsCarouselComponent, HeroSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blite-ti');
}
