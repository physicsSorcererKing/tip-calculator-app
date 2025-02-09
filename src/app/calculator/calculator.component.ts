import { Component } from '@angular/core';
import { InputComponent } from '@/app/ui/input/input.component';

@Component({
  selector: 'app-calculator',
  imports: [InputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {}
