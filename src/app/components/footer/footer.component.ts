import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CssIsAwesomeComponent } from '../css-is-awesome/css-is-awesome.component';
import { FooterMenuComponent } from "../footer-menu/footer-menu.component";

@Component({
  selector: 'footer[app-footer]',
  standalone: true,
  imports: [CommonModule, CssIsAwesomeComponent, FooterMenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  
})
export class FooterComponent {
}
