import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticleManagerService } from '../../services/article-manager.service';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})
export class BlockComponent {
  @Input() blockTitle: string = "";
  @Input() textBlock: boolean = false;

  constructor(private articleManager: ArticleManagerService) { }

  contentString: string = '';

  ngOnInit() {
    this.articleManager.contentString$.subscribe(x => this.contentString = x);
  }

}
