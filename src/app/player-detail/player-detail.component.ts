import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Info } from '../info.model';
import { InfoService } from '../info.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [InfoService]
})
export class PlayerDetailComponent implements OnInit {
  infoId: number;
  infoToDisplay: Info;

  constructor(private route: ActivatedRoute, private location: Location, private infoService: InfoService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.infoId = parseInt(urlParameters['id']);
    });
    this.infoToDisplay = this.infoService.getInfoById(this.infoId)
  }
}
