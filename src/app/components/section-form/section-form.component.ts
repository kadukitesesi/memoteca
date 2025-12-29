import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo:'Aprendendo js',
    autoria:'Dev',
    modelo:''
  }


  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("modelo1")
  }

}
