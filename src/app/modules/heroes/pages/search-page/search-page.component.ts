import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HeroesService } from '@modules/heroes/services';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html'
})
export class SearchPageComponent {
  public searchInput = new FormControl('')

  private heroesService = inject(HeroesService);

}
