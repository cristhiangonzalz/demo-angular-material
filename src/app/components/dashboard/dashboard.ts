import { Component } from '@angular/core';
import {Navbar} from './navbar/navbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    MatToolbarModule,
    RouterOutlet,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
