import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoyageServiceService } from '../services/voyage-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css'],
})
export class AddVoyageComponent {
  constructor(
    private voyageserviceService: VoyageServiceService,
    private router: Router
  ) {}
  voyage: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    depart: new FormControl('Vdepart', [Validators.pattern(/^Vdepart.*/)]),
    arrive: new FormControl(),
    nb_place: new FormControl(),
  });

  add() {
    this.voyage.value.nb_view = 0;

    this.voyageserviceService.addVoyage(this.voyage.value).subscribe({
      next: () => this.router.navigate(['/listvoyage']),
    });
  }
}
