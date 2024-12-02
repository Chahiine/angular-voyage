import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voyage } from '../voyage';

@Injectable({
  providedIn: 'root',
})
export class VoyageServiceService {
  constructor(private Http: HttpClient) {}
  addVoyage(voyage: Voyage) {
    return this.Http.post('http://localhost:3000/voyage', voyage);
  }
  getVoyage() {
    return this.Http.get<Voyage[]>('http://localhost:3000/voyage');
  }
  updatevoyage(id: number, voyage: Voyage) {
    return this.Http.put('http://localhost:3000/voyage/' + id, voyage);
  }
  getbyid(id: number) {
    return this.Http.get<Voyage>('http://localhost:3000/voyage/' + id);
  }
}
