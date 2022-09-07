import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Ponto+Doacao-Alimentos/@-24.9916579,-47.2089022,6z'
    );
  }
  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Ponto+Doacao-Roupas/@-24.9916579,-47.2089022,6z'
    );
  }
  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/Ponto+Doacao-Sangue/@-24.9916579,-47.2089022,6z'
    );
  }

  abrirUrl(url: string) {
    window.open(url, '_blanck').focus();
  }
}
