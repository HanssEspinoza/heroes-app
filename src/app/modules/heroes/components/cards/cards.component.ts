import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '@modules/heroes/models';

@Component({
  selector: 'heroes-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property es required');
  }

}
