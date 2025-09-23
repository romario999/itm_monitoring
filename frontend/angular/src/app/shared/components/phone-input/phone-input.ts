import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputSidebarText, InputPlaceholder, RegEx } from '../../../app.enum';
import { Input } from '../input/input';
import { InputType } from '../../../app.enum';
import type { InputLabel } from '../../../app.models';

@Component({
  selector: 'app-phone-input',
  imports: [Input, ReactiveFormsModule],
  templateUrl: './phone-input.html',
  styleUrl: './phone-input.scss',
})
export class PhoneInput {
  readonly control = input.required<FormControl>();
  readonly label = input.required<InputLabel>();

  readonly isRequired = input<boolean>(false);
  readonly placeholder = input<InputPlaceholder>(InputPlaceholder.PhoneNumber);

  public readonly inputSidebarText = InputSidebarText.PhoneCodeUA;
  public readonly type = InputType.Tel;
  public readonly sidebarId = crypto.randomUUID();

  public onInput(event: Event): void {
    this.#restrictInput(event);
  }

  #restrictInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const pattern = new RegExp(RegEx.Digits, 'g');
    const digits = input.value.match(pattern);
    input.value = digits ? digits.join('') : '';

    if (input.value.length > 9) {
      input.value = input.value.slice(0, 9);
    }
  }
}
