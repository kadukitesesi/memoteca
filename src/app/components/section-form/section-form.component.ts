import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento/pensamento';
import { PensamentoService } from '../pensamentos/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: ['./section-form.component.css']
})
export class SectionFormComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo:'',
    autoria:'',
    modelo:''
  }


  constructor(private service: PensamentoService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.create(this.pensamento).subscribe()
    this.router.navigate(['/section-bulletin'])
  }

  cancelar() {
    this.router.navigate(['/section-bulletin'])
  }

}
