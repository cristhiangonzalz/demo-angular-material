import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    form: FormGroup;
    private _snackBar = inject(MatSnackBar);
    loading = false;


  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar() {
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password)

    if (usuario == "admin" && password == "admin") {
      this.mostrarMensaje("Usuario ingresado correctamente", "");
      this.fakeLoading();
    } else {
      this.mostrarMensaje("Credenciales incorrectas", "cerrar");
      this.form.reset();

    }
  }

  mostrarMensaje(mensaje: string, accion: string) {
    this._snackBar.open(mensaje, accion, {
      duration: 4000
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    },1500);
  }

}

