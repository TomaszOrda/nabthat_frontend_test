import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlockComponent } from './components/block/block.component';
import { H1Component } from './components/h1/h1.component';
import { Html5LogoComponent } from './components/html5-logo/html5-logo.component';
import { ArticleManagerService } from './services/article-manager.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    FormsModule,
    HeaderComponent, FooterComponent, BlockComponent, H1Component, Html5LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tomasz_Orda_NabThat_frontend_test';

  constructor(private articleManager: ArticleManagerService) {}



  replace(){
    this.articleManager.replace()
  }
  append(){
    this.articleManager.append()
  }

  setOption(option:string){
    console.log(option)
    this.articleManager.setOption(option)
  }
}
