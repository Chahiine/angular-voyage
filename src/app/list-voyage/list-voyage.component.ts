import { Component } from '@angular/core';


import { VoyageServiceService } from '../services/voyage-service.service';
import { Voyage } from '../voyage';
@Component({
  selector: 'app-list-voyage',
  templateUrl: './list-voyage.component.html',
  styleUrls: ['./list-voyage.component.css'],
})
export class ListVoyageComponent {
  
  Voyage: Voyage[] = [];

  constructor(private voyageservice: VoyageServiceService) {
    this.voyageservice.getVoyage().subscribe({
      next: (data) => (this.Voyage = data),
    });
  }

  reserve(voayage: Voyage) {
    voayage.nb_place--;
    this.voyageservice.updatevoyage(voayage.id, voayage).subscribe({
      next: () => {
        let index = this.Voyage.findIndex((e) => e.id == voayage.id);

        this.Voyage[index] = voayage;
      },
    });
  }
}
