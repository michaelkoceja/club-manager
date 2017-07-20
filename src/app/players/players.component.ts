import { Component, OnInit } from '@angular/core';
import { Info } from '../info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  infos: Info[] = [
    new Info('Keylor Navas', 30, 'Keeper', 'random information.', 1),
    new Info('Daniel Carvajal Ramos', 25, 'Defender', 'random information.', 2),
  ];

  goToDetailPage(clickedInfo: Info) {
    this.router.navigate(['players', clickedInfo.id]);
  };

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
