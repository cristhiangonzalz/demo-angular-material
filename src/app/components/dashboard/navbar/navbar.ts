import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MenuService} from '../../../services/menu-service';
import {Menu} from '../../../interfaces/menu';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  // menu: Menu[] = [];
  menu$!: Observable<Menu[]>;

  constructor(
    private _menuService: MenuService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    // this.cargarMenu();
    this.menu$ = this._menuService.getMenu();
  }

  // cargarMenu() {
  //   this._menuService.getMenu().subscribe(data => {
  //     this.menu = data;
  //     this.cdr.markForCheck();
  //     console.log(this.menu);
  //   });
  // }
}
