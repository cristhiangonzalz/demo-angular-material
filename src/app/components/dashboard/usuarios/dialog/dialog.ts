import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {Usuarios} from '../usuarios';

@Component({
  selector: 'app-dialog',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatButtonModule
  ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Dialog {
  readonly dialogRef = inject(MatDialogRef<Dialog>);

  constructor(private _usuarioTS: Usuarios) {
  }

  protected confirmarEliminacion() {
    this._usuarioTS.eliminarUsuario();
  }
}
