import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
      button { margin-right: 5px; }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCss(region: string): string {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if(region === this.regionActiva) {
      return;
    }

    this.paises = [];
    this.regionActiva = region;
    console.log(this.regionActiva);
    this.paisService.buscarXRegion(region).subscribe({
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
        this.paises = [];
      }
    });
  }
}
