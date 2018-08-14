import { Component, OnInit } from '@angular/core';
import { PsychoService } from '../psycho.service';
import { Psycho } from '../psycho';

@Component({
  selector: 'app-psycho-display',
  templateUrl: './psycho-display.component.html',
  styleUrls: ['./psycho-display.component.scss']
})
export class PsychoDisplayComponent implements OnInit {
  psychos: Psycho[];
  constructor(private psychoService: PsychoService) { }

  ngOnInit() {
    this.getPsychos();
  }
  getPsychos(): void {
    this.psychoService.getPsychos()
      .subscribe(psychos => this.psychos = psychos);
  }
  delete(id: string): void {
    this.psychoService.deletePsycho(id)
    .subscribe(() => this.psychos = this.psychos.filter(p => p.id !== id));
  }
}
