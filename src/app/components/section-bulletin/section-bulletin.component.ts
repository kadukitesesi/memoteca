import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-section-bulletin',
  templateUrl: './section-bulletin.component.html',
  styleUrls: ['./section-bulletin.component.css']
})
export class SectionBulletinComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
