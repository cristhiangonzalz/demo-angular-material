import {AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Usuario} from '../../../interfaces/usuario';
import {MatIcon} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {UsuarioService} from '../../../services/usuario-service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [
    MatToolbar,
    MatTableModule,
    MatIcon,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginator,
    MatSort,
    MatSortModule,
    MatDialogModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  listaUsuarios: Usuario[] = [];
  dataSource!: MatTableDataSource<any>;
  readonly dialog = inject(MatDialog);

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.listaUsuarios = this._usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarUsuario(usuario: string) {
    this.listaUsuarios = this._usuarioService.eliminarUsuario(usuario);
    this.dataSource.data = this.listaUsuarios;
    this.ngAfterViewInit();
    this._snackBar.open("Usuarios eliminado correctamente", "", {
      duration: 1000
    });
  }
}

