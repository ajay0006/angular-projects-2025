import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Formcontrol } from "../../../shared/formcontrol/formcontrol";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Formcontrol, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket implements AfterViewInit, OnInit {
  /* i am using ViewChild to get access to the child components for this template, in this case that is the form element
  the form would be a type HtmlFormElement that is wrapped in an Element Ref
  rather than passing the #form template variable to the onSubmit function, i can use this method to access the form element
  */
  @ViewChild('form') formOldWay?: ElementRef<HTMLFormElement>

  // keep in mind that if you are using required, it means you are sure that there is a template variable named form
  private formNewWay = viewChild.required<ElementRef<HTMLFormElement>>('form');

  /* Dami keep in mind that this onl;y works for the decorator type of the ViewChild, it doesnt apply to the signal type aka the newer type
why? well because with the signal type, the content/variable is available to a ngOnInit, so there would be no need to use the ngAfterViewInit

but the kicker here, is that if using the ngAfterViewInit, we are resst assured that def something will be retrieved, since this only initialisess after a view ha been selected
*/

  ngOnInit(): void {
    console.log('ON-INIT');
    console.log(this.formOldWay?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After VIEW INIT');
    console.log(this.formOldWay?.nativeElement);

  }

  onSubmitViewChild(title: string, description: string) {
    console.log(title);
    console.log(description);
    this.formOldWay?.nativeElement.reset();
    this.formNewWay().nativeElement.reset();
  }

  onSubmitTemplateVariable(title: string, description: string, form: HTMLFormElement) {
    console.log(title);
    console.log(description);
    form.reset();
  }

}
