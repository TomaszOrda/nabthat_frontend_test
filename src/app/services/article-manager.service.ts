import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleManagerService {
  private data: any;
  private usedIds = new Set();

  constructor(private http: HttpClient) {
    this.http.get<any>('assets/data.json').subscribe(
      (response) => this.data = response['data'])
  }

  private option = "";
  setOption(option: string) {
    this.option = option
  }

  getParagraph(append = false) {
    if (!append) this.usedIds.clear()
    switch (this.option) {
      case 'first': {
        if (this.usedIds.has(0) && append) return false
        this.usedIds.add(0)
        return this.data[0]
      }
      case 'second': {
        if (this.usedIds.has(1) && append) return false
        this.usedIds.add(1)
        return this.data[1]
      }
      case 'random': {
        if ((this.usedIds.size == this.data.length) && append) return false
        var choices = []
        for (let e = 0; e < this.data.length; e++) {
          if (!(this.usedIds.has(e))) choices.push(e)
        }
        console.log(choices)
        var choice = choices[Math.floor(Math.random() * choices.length)]
        this.usedIds.add(choice)
        return this.data[choice]
      }
    }
  }
  private contentStringSubject = new BehaviorSubject<string>('');
  public contentString$ = this.contentStringSubject.asObservable();

  public content = new Set<string>()

  contentToString() {
    var result = ""
    var contentSorted = Array.from(this.content).sort((a, b) => a.localeCompare(b))
    for (let e of contentSorted) {
      result += "<p>" + e + "</p>"
    }
    return result
  }


  append() {
    if (!this.option) {
      alert("Cannot append. Paragraph not choosen.")
      return;
    }
    var str = this.getParagraph(true)
    if (!str) {
      alert("Cannot append " + this.option + " option. " + ((this.option == 'random') ? "All paragraphs used." : "Paragraph already used."))
    } else {
      this.content.add(str)
      this.contentStringSubject.next(this.contentToString())
    }
  }

  replace() {
    if (!this.option) {
      alert("Cannot append. Paragraph not choosen.")
      return;
    }
    this.content.clear()
    var str = this.getParagraph()
    this.content.add(str)
    this.contentStringSubject.next(str + "<br>")
  }

}
