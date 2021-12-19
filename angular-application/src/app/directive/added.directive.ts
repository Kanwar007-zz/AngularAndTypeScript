import { Directive,ElementRef,HostListener, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appAdded]'
})
export class AddedDirective {

  constructor(private e1 : ElementRef) { }

   // @Input("format") format;
    @Input("appAdded") format;
    @HostListener("focus") onfocus() {
    console.log("on focus");
  }

 @HostListener("blur") onBlur() {
     let value :String = this.e1.nativeElement.value;
     if(this.format=="lowercase")
     this.e1.nativeElement.value= value.toLowerCase();
     else
     this.e1.nativeElement.value= value.toUpperCase();
    console.log(" on Blur");
  }
  

}
