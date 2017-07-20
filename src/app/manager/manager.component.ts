import { Component, OnInit } from '@angular/core';
import { Info } from '../info.model';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [InfoService]
})
export class ManagerComponent implements OnInit {

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, position: string, bio: string) {
  var newInfo: Info = new Info(name, age, position, bio);
  this.infoService.addInfo(newInfo);
}

}
