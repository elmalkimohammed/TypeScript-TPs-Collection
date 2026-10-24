import { Component } from '@angular/core';
import { About } from '../about/about';

@Component({
  selector: 'app-home-page',
  imports: [About],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
