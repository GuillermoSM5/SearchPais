import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: Boolean = false;

  constructor(private servicePais: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    if (this.termino === '') return;
    this.servicePais.buscarPais(this.termino).subscribe(
      (res) => {
        this.paises = res;
        this.mostrarSugerencias = false;
      },
      (err) => {
        this.paises = [];
        this.error = true;
        this.mostrarSugerencias = false;
      }
    );
  }

  sugerencias(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.error = false;
    if (termino === '') {
      this.paisesSugeridos = [];
      this.mostrarSugerencias = false;
      return;
    }

    this.servicePais.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => {
        this.paises = [];
        this.error = true;
        this.mostrarSugerencias = false;
      }
    );
  }
  ngOnInit(): void {}
}
