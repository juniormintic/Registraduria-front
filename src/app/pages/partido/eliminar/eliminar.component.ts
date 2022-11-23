import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';

@Component({
  selector: 'ngx-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {
  elPartido: Partido = {
    nombre: "",
    lema: "",
    
    }
  constructor() { }

  ngOnInit(): void {
  }

}
