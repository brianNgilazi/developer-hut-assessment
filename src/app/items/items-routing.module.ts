import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemsComponent } from './items.component';

const routes: Routes = [
  { path: '', component: ItemsComponent, title: 'Items' },
  { path: 'new', component: EditItemComponent, title: 'Add A New Item' },
  { path: 'edit/:id', component: EditItemComponent, title: 'Edit Item'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
