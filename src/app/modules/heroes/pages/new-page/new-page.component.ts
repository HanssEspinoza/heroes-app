import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html'
})
export class NewPageComponent {
  @Input()
  id?: string;

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comicas', desc: 'Marvel - Comics'}
  ];
}
