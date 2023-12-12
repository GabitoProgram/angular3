import { Component } from '@angular/core';
import { DatosProyService } from '../datos-proy.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  constructor(public datCat: DatosProyService){}
  
}
