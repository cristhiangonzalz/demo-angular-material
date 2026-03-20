import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Usuario} from '../../../interfaces/usuario';
import {MatIcon} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const listaUsuarios: Usuario[] = [
  {usuario: "1", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
  {usuario: "2", nombre: 'Alberto', apellido: "Moreira", sexo: 'Masculino'},
  {usuario: "3", nombre: 'Carlos', apellido: "Costa", sexo: 'Masculino'},
  {usuario: "4", nombre: 'Ignacio', apellido: "Cabral", sexo: 'Masculino'},
  {usuario: "5", nombre: 'Maria', apellido: "Perez", sexo: 'Femenino'},
  {usuario: "6", nombre: 'Andres', apellido: "Sirio", sexo: 'Masculino'},

];

@Component({
  selector: 'app-usuarios',
  imports: [
    MatToolbar,
    MatTableModule,
    MatIcon,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource = new MatTableDataSource(listaUsuarios);

  ngOnInit(): void {
    // console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
