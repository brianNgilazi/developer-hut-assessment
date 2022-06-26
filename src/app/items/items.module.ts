import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ItemsComponent, EditItemComponent],
  imports: [CommonModule, ItemsRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ItemsModule {}
