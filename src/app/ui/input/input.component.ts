import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ui-input',
  imports: [FormsModule, NgOptimizedImage],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  value = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() label = 'label';
  @Input() errorMessage = '';
  @Input() iconSrc = '';
  @Input() iconAlt = '';
}
