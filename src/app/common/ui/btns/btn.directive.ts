import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

interface BtnOpts {
  style?: string;
}

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {
  @Input() appBtn: string;
  @Input('opts') opts: BtnOpts;

  constructor(private elem: ElementRef,
              private render: Renderer2) {


  }

  ngOnInit() {
    console.log(this.opts);
    this.render.addClass(
      this.elem.nativeElement,
      'app-btn'
    );

    // if (this.btnOpts && this.btnOpts.style) {
    this.render.addClass(
      this.elem.nativeElement,
      `app-btn--${this.appBtn}`
    );
    // }
  }
}
