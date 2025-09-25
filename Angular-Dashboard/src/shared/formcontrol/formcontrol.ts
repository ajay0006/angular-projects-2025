import { AfterViewInit, Component, contentChild, ContentChild, ElementRef, Host, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formcontrol',
  imports: [],
  templateUrl: './formcontrol.html',
  styleUrl: './formcontrol.css',
  /* this disables the style being scoped it its component, that means that the forControl.css will 
   be scoped to the global host 
   */
  encapsulation: ViewEncapsulation.None,
  /* this will add the values specified here as pptys on the host element
  in this case i am adding the style class 'control', which is equivalent to me
  going into the html file and adding the class 'control' to the new-tickethost element 
  */
  host: {
    class: 'control',
    'click': 'onClick()',
  }
})
export class Formcontrol {
  /* Thats because projected content is not part of the template since i am using ngContent*/
  @ContentChild('inputContentChild') private projectedContent?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private projectedContentSignal = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  onClick() {
    console.log('clicked');
    console.log(this.projectedContent?.nativeElement.value);
    console.log(this.projectedContentSignal()?.nativeElement.value);
    
  }
}
