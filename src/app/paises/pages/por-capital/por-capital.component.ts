import { Component, OnInit } from '@angular/core';
import { CapitalesService } from '../../services/capitales.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];

  constructor(private serviceCapital: CapitalesService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    if (this.termino === '') return;
    this.serviceCapital.buscarCapital(termino).subscribe(
      (res) => {
        this.paises = res;
      },
      (err) => {
        this.error = true;
      }
    );
    console.log(this.termino);
  }

  sugerencias(termino: string) {
    this.error = false;
    console.log('sugerencias', termino);
  }
}
