import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-bulletin',
  templateUrl: './section-bulletin.component.html',
  styleUrls: ['./section-bulletin.component.css']
})
export class SectionBulletinComponent implements OnInit {

  listaPensamentos = [
     {
      conteudo: 'Gosto muito do Angular',
      autoria: 'eu',
      modelo: 'modelo3'
    },
     {
      conteudo: 'Gosto muito do js',
      autoria: 'eu',
      modelo: 'modelo1'
    },
     {
      conteudo: 'Em um campo vasto sob o céu de ametista, o vento sussurra segredos antigos entre as folhas de carvalho. Pequenos riachos correm sobre pedras polidas, refletindo o brilho de um sol poente que insiste em adiar a noite. O silêncio é a música mais doce aqui.  ',
      autoria: 'eu',
      modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
