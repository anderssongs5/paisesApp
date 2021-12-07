import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarXCapital(this.termino).subscribe({
      next: (paises) => {
        //debugger;
        console.log('Next');
        console.log(paises);
        this.paises = paises;
      },
      error: (e) => {
        //debugger;
        console.log('Error');
        console.error(e);
        this.hayError = true;
        this.paises = [];
      }
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
