import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '@modules/heroes/models';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html'
})
export class NewPageComponent {
  @Input()
  id?: string;

  public heroForm = new FormGroup({
    id:               new FormControl<string>(''),
    superhero:        new FormControl<string>('', { nonNullable: true }),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comicas', desc: 'Marvel - Comics'}
  ];

  onSubmit(): void {
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    })
  }
}
