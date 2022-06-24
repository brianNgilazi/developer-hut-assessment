import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private allItems: Item[] = []
  private items$ = new BehaviorSubject<Item[]>([]);

  constructor() { }

  /**
   * Add an Item to the array of all items
   * @param item the item to add to the list
   */
  addItem(item: Partial<Item>){

  }

  /**
   * Update an item in the array
   * @param item the item to update
   */
  updateItem(item: Item){

  }

  /**
   * Delete an item from the array
   * @param item the item to delete
   */
  deleteItem(item: Item){

  }

  get items(){
    return this.items$.asObservable();
  }

}
