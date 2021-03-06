import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    /*this.activatedRoute.params.subscribe( ({id}) => {
      console.log(id);

      this.paisService.buscarXId(id).subscribe(paises => {
        console.log(paises);
      });
    });*/

    this.activatedRoute.params.pipe(switchMap((param) => this.paisService.buscarXId(param['id'])),
      tap(console.log))
      .subscribe(resp => {
        //debugger;

        this.pais = resp[0];
      })
  }

}
