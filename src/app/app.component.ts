import { Component, Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

//a component is a directive with a template
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
}


//Attribute directive - changes the behavior of a component but wont affect the template
@Directive({
  selector: '[uppercase]'
})

export class UppercaseDirective {
  constructor(private el:ElementRef){
    el.nativeElement.style.textTransform='uppercase';
  }
}

//Structural Directive - changes the behavior by changing how the template is rendered

@Directive({
  selector:'[ifnot]'
})
export class IfNotDirective{
  private hasView: boolean = false

  constructor(private temRef: TemplateRef<any>, private viewContainer: ViewContainerRef){}

  @Input() set ifnot(condition:boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.temRef);
      this.hasView = true;
    } else if ( condition && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}