import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/header/header.component';
import { CalculatorComponent } from '@/app/calculator/calculator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tip-calculator-app';
}
