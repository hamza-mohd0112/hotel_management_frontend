import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputType]'
})
export class InputTypeDirective {
  @Input('inputType') inputType: any;
  // Allow decimal numbers and negative values
  regex: any;
  // var regex = /^[0-9]*(?:\.\d{1,2})?$/;
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];

  constructor(private el: ElementRef) {
  }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
      const regex = this.getRegex(this.inputType);
      // Allow Backspace, tab, end, and home keys
      if (this.specialKeys.indexOf(event.key) !== -1) {
          return;
      }
      const current: string = this.el.nativeElement.value;
      const next: string = current.concat(event.key);
      if (!regex.test(next)) {
          event.preventDefault();
      }
  }

  getRegex(inputType: any) {
      let regex;
      switch (inputType) {
          case 'alpha-space':
              regex = /^[a-zA-Z ]*$/;
              break;
          case 'alpha-numeric':
                regex = /^[A-Za-z0-9\s ,]*$/
                break;
          case 'only-number':
                regex = /^[1-9][0-9]*$/;
                break;
          default:
              regex = /^[a-zA-Z ]*$/;
              break;
      }
      return regex;
  }

}
