import { Component, inject, OnInit } from '@angular/core';

import { Hero } from '@modules/heroes/models';
import { HeroesService } from '@modules/heroes/services';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent implements OnInit {

  public heroes: Hero[] = [];

  private heroesService = inject(HeroesService);

  ngOnInit():void {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

}
