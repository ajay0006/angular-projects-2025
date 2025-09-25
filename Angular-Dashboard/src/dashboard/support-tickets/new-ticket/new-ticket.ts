import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Formcontrol } from "../../../shared/formcontrol/formcontrol";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Formcontrol, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css'
})
export class NewTicket {
  /* i am using ViewChild to get access to the child components for this template, in this case that is the form element
  the form would be a type HtmlFormElement that is wrapped in an Element Ref
  rather than passing the #form template variable to the onSubmit function, i can use this method to access the form element
  */
  @ViewChild('form') formOldWay?: ElementRef<HTMLFormElement>

  // keep in mind that if you are using required, it means you are sure that there is a template variable named form
  private formNewWay = viewChild.required<ElementRef<HTMLFormElement>>('form');

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
