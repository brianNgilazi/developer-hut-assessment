import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items$?: Observable<Item[]>;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items$ =  this.itemsService.items
  }

}
