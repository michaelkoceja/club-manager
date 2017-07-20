import { Component, OnInit } from '@angular/core';
import { Info } from '../info.model';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [InfoService]
})
export class PlayersComponent implements OnInit {
  infos: Info[];


  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    this.infos = this.infoService.getInfos();
  }

  goToDetailPage(clickedInfo: Info) {
    this.router.navigate(['players', clickedInfo.id]);
  };
}
