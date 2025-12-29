import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: 'Gosto muito do Angular',
    autoria: 'eu',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widththought(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }

  }

}
