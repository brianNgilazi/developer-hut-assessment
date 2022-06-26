import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit, OnDestroy {
  item?: Item;
  form!: FormGroup;
  subscriptionSubject = new Subject();

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.route.params
      .pipe(takeUntil(this.subscriptionSubject))
      .subscribe((params) => {
        console.log(params);
        if (params['id']) {
          this.item = this.itemsService.getItem(Number.parseInt(params['id']));
          if (this.item) {
            this.form.patchValue(this.item);
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptionSubject.next(true);
  }

  submit() {
    if (this.item) {
      const updatedItem = { ...this.item, ...this.form.value };
      this.itemsService.updateItem(updatedItem);
      this.router.navigate(['items']);
    } else {
      this.itemsService.addItem(this.form.value);
      this.router.navigate(['items']);
    }
  }

  delete(){
    if(this.item){
      this.itemsService.deleteItem(this.item);
      this.router.navigate(['items']);
    }

  }
}
