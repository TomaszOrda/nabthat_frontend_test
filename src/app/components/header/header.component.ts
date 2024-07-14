import { Component } from '@angular/core';
import { Html5LogoComponent } from "../html5-logo/html5-logo.component";
import { CommonModule } from '@angular/common';
import { PersonalDataManagerService } from '../../services/personal-data-manager.service';

@Component({
  selector: 'header[app-header]',
  standalone: true,
  imports: [Html5LogoComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  personalDataVisible: boolean = false;
  constructor(private personalDataManager: PersonalDataManagerService) { }

  ngOnInit() {
    this.personalDataManager.personalDataVisible$.subscribe(x => this.personalDataVisible = x);
  }
}

