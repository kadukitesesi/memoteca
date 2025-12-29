import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento/pensamento';
import { PensamentoService } from '../pensamentos/pensamento.service';

@Component({
  selector: 'app-section-bulletin',
  templateUrl: './section-bulletin.component.html',
  styleUrls: ['./section-bulletin.component.css']
})
export class SectionBulletinComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
