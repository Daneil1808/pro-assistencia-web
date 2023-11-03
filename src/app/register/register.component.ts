import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public dialog: MatDialog) {}

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  celular = new FormControl('');
  rg = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);
  neighborhood = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Preenchimento obrigatório';
    }

    return this.name.hasError('email') ? 'Este e-mail não é valido' : '';
  }

  getErrorMessageDocuments() {
    if (this.name.hasError('required')) {
      return 'Preenchimento obrigatório de RG ou CPF';
    }

    return this.name.hasError('email') ? 'RG ou CPF não é válido' : '';
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: '560px',
      height: '240px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
