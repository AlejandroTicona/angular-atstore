import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '../../models/Store';
import { StoreService } from '../../services/store.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './stores.component.html'
})
export class StoresComponent implements OnInit {
  @Input() stores: Store[] = [];

  @Output() idStoreEventEmitter = new EventEmitter();

  @Output() selectedStoreEventEmitter = new EventEmitter();

  constructor(
    private service: StoreService,
    private sharingData: SharingDataService,
    private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.stores = this.router.getCurrentNavigation()?.extras.state!['stores'];
    }
  }

  ngOnInit(): void {
    if (this.stores == undefined || this.stores == null || this.stores.length == 0) {
      console.log("Consulta findAll");
      this.service.findAll().subscribe(stores => this.stores = stores);
    }
  }

  onRemoveStore(id: number): void {
    this.sharingData.idStoreEventEmitter.emit(id);
  }

  onSelectedStore(store: Store): void {
    this.router.navigate(['/stores/edit', store.id]);
  }
}
