import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var FlowbiteDatepicker: any;

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {
  @Input() datepickerOptions: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    new FlowbiteDatepicker(this.el.nativeElement, this.datepickerOptions);
  }
}
