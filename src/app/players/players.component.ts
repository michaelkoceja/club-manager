import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  // playerInfo = this.playerInfo = [
  //   new this.playerInfo("Keylor Navas", "30", "He is quick, has great reflexes, always positions himself well and is one of the best in one-to-ones; Keylor Navas has everything it takes to be an exceptional keeper. He demonstrated it in Brazil, where he only let in two goals in five matches and took Costa Rica to the quarter-finals for the first time in their history.", "1"),
  //   new this.playerInfo("Daniel Carvajal Ramos", "25", "Local full-back Dani Carvajal started his career at the Real Madrid youth academy and is particularly noted for his speed and the composure he displays in his position. He has been a regular at all level of Spanish international youth football and has earned a European Championship medal at Under -19 and Under-21 level.", "2"),
  // ];

  constructor() { }

  ngOnInit() {
  }

}
