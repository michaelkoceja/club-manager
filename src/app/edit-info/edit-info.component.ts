import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../info.model';
import { InfoService} from '../info.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css'],
  providers: [InfoService]
})
export class EditInfoComponent implements OnInit {
  @Input() selectedInfo;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
  }

  beginUpdatingInfo(infoToUpdate) {
    this.infoService.updateInfo(infoToUpdate);
  }

  beginDeletingInfo(infoToDelete){
  if(confirm("Are you sure you want to remove this player from the roster?")){
    this.infoService.deleteInfo(infoToDelete);
  }
}
}
