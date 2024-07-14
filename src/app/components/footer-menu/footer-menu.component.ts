import { Component } from '@angular/core';
import { PersonalDataManagerService } from '../../services/personal-data-manager.service';

@Component({
  selector: 'app-footer-menu',
  standalone: true,
  imports: [],
  templateUrl: './footer-menu.component.html',
  styleUrl: './footer-menu.component.scss'
})
export class FooterMenuComponent {
  constructor(private personalDataManager: PersonalDataManagerService){}

  showPersonalData() {
    this.personalDataManager.showPersonalData()
  }

  reloadPage(){
    window.location.reload();
  }
}
