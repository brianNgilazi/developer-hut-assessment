import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private _allItems: Item[] = [];
  private _items$ = new BehaviorSubject<Item[]>(this._allItems);

  constructor() {}

  /**
   * Add an Item to the array of all items
   * @param item the item to add to the list
   */
  addItem(item: Partial<Item>) {
    item.id = this._allItems.length;
    this._allItems.push(item as Item);
    this._items$.next(this._allItems);
  }

  /**
   * Update an item in the array
   * @param updatedItem the item to update
   */
  updateItem(updatedItem: Item) {
    const itemToUpdateIndex = this._allItems.findIndex(
      (item) => item.id === updatedItem.id
    );
    this._allItems[itemToUpdateIndex] = updatedItem;
    this._items$.next(this._allItems);
  }

  /**
   * Delete an item from the array
   * @param itemToDelete the item to delete
   */
  deleteItem(itemToDelete: Item) {
    const itemToDeleteIndex = this._allItems.findIndex(
      (item) => item.id === itemToDelete.id
    );
    this._allItems.splice(itemToDeleteIndex, 1);
    this._items$.next(this._allItems);
  }

  /**
   * Get an item with the provided id
   * @param id
   * @returns the item corresponding to the `id` if it exists or `undefined`
   */
  getItem(id: number) {
    console.log(this._items$.value);
    return this._allItems.find((item) => item.id === id);
  }

  get items() {
    return this._items$.asObservable();
  }

  search(query: string) {
    query = query.toLowerCase();
    const results: Item[] = [];
    this._allItems.forEach((item) => {
      if (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      ) {
        results.push(item);
      }
    });
    this._items$.next(results);
  }

  private demoData(numberOfItems: number = 5) {
    const data: Item[] = [];
    for (let i = 0; i < numberOfItems; i++) {
      data.push({
        id: i,
        title: `Item ${i}`,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel ante et orci mollis interdum non eget metus.',
      });
    }
    return data;
  }
}
