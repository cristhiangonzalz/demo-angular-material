import { Injectable } from "@angular/core";
import {Usuario} from '../interfaces/usuario';
import {Usuarios} from '../components/dashboard/usuarios/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    {usuario: "1", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "2", nombre: 'Alberto', apellido: "Moreira", sexo: 'Masculino'},
    {usuario: "3", nombre: 'Carlos', apellido: "Costa", sexo: 'Masculino'},
    {usuario: "4", nombre: 'Ignacio', apellido: "Cabral", sexo: 'Masculino'},
    {usuario: "5", nombre: 'Maria', apellido: "Perez", sexo: 'Femenino'},
    {usuario: "6", nombre: 'Andrés', apellido: "Sirio", sexo: 'Masculino'},
    {usuario: "7", nombre: 'Carlos', apellido: "Mendoza", sexo: 'Masculino'},
    {usuario: "8", nombre: 'Lucía', apellido: "Fernández", sexo: 'Femenino'},
    {usuario: "9", nombre: 'Roberto', apellido: "Gómez", sexo: 'Masculino'},
    {usuario: "10", nombre: 'Mariana', apellido: "Vaca", sexo: 'Femenino'},
    {usuario: "11", nombre: 'Elena', apellido: "Paredes", sexo: 'Femenino'},
    {usuario: "12", nombre: 'Sofía', apellido: "Lorca", sexo: 'Femenino'},
    {usuario: "13", nombre: 'Javier', apellido: "Ortiz", sexo: 'Masculino'},
    {usuario: "14", nombre: 'Mateo', apellido: "Silva", sexo: 'Masculino'},
    {usuario: "15", nombre: 'Valeria', apellido: "Ramos", sexo: 'Femenino'},
    {usuario: "16", nombre: 'Diego', apellido: "Torres", sexo: 'Masculino'},
    {usuario: "17", nombre: 'Samuel', apellido: "Castillo", sexo: 'Masculino'},
    {usuario: "18", nombre: 'Isabel', apellido: "Guerra", sexo: 'Femenino'},
    {usuario: "19", nombre: 'Beatriz', apellido: "Luna", sexo: 'Femenino'},
    {usuario: "20", nombre: 'Joaquín', apellido: "Reyes", sexo: 'Masculino'},
  ];

  constructor() {
  }

  getUsuario() {
    return this.listaUsuarios.slice();
  }

  eliminarUsuario(usuario: string): Usuario[] {
    return this.listaUsuarios = this.listaUsuarios.filter(u => u.usuario != usuario);
  }

}
