import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hero } from 'src/app/hero';
import { Subject } from 'rxjs/internal/Subject';
import { HeroService } from 'src/app/hero.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  public heroes$: Observable<Hero[]>;
  private _searchQuery = new Subject<string>();

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.heroes$ = this._searchQuery.pipe(
        // wait 200 milliseconds after each keystroke before considering the search term
        debounceTime(200),
        // ignore new term if same as previous one
        distinctUntilChanged(),
        // swith automatically to a new observable each time search time changes
        switchMap((searchTerm: string) => this.heroService.searchHeroes(searchTerm)) 
    );
  }

  public search(searchStr: string){
    console.log(searchStr);
    this._searchQuery.next(searchStr);
  }
}
