import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '@modules/heroes/models';

import { HeroesService } from '@modules/heroes/services';
import { delay } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit {
  @Input() id!: string;

  public hero?: Hero;

  private heroesService = inject(HeroesService);
  private router = inject(Router);

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.heroesService
      .getHeroById(this.id)
      .pipe(delay(1000))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes']);

        this.hero = hero;
        console.log(this.hero);
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
