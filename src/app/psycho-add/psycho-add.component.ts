import { Component, OnInit } from '@angular/core';
import { PsychoService } from '../psycho.service';
import { Psycho } from '../psycho';
import { Location } from '@angular/common';

@Component({
  selector: 'app-psycho-add',
  templateUrl: './psycho-add.component.html',
  styleUrls: ['./psycho-add.component.scss']
})
export class PsychoAddComponent implements OnInit {

  constructor(private psychoService: PsychoService, private location: Location) { }

  ngOnInit() {
  }

  add(no: string, sentence: string): void {
    if ( !no || !sentence) { return; }
    this.psychoService.addPsycho({no, sentence} as Psycho)
    .subscribe();
  }
  goBack(): void {
    this.location.back();
  }
}
