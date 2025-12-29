import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  delete() {
    if(this.pensamento.id){

      this.service.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/section-bulletin'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/section-bulletin'])
  }
}
