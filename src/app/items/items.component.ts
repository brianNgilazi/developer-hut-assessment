import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounce, delay, distinctUntilChanged, Observable } from 'rxjs';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$?: Observable<Item[]>;
  searchControl = new FormControl('', [Validators.required]);

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items$ =  this.itemsService.items;
    this.searchControl.valueChanges.pipe(distinctUntilChanged(), delay(500)).subscribe(
      value => {
        this.search();
      }
    )
  }

  search(){
    const query:string = this.searchControl.value ?? '';
    this.itemsService.search(query);
  }

}
