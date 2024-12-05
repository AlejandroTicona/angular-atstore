import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '../../models/Store';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-stores-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './stores-form.component.html'
})
export class StoresFormComponent implements OnInit {

  store: Store;

  constructor(
    private route: ActivatedRoute, 
    private sharingData: SharingDataService, 
    private service: StoreService) {
    this.store = new Store();
  }

  ngOnInit(): void {

    this.sharingData.selectStoreEventEmitter.subscribe(store => this.store = store);

    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');

      if (id > 0) {
        //this.sharingData.findStoreByIdEventEmitter.emit(id);
        this.service.findById(id).subscribe(store => this.store = store);
      }
    });
    console.log(this.store);
  }

  onSubmit(storeForm: NgForm): void {
    if (storeForm.valid) {
      this.sharingData.newStoreEventEmitter.emit(this.store);
      console.log(this.store);
    }
    storeForm.reset();
    storeForm.resetForm();
  }

  onClear(storeForm: NgForm): void {
    this.store = new Store();
    storeForm.reset();
    storeForm.resetForm();
  }

}
