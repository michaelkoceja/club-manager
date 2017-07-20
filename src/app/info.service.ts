import { Injectable } from '@angular/core';
import { Info } from './info.model';
import { INFOS } from './mock-infos';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class InfoService {
  infos: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.infos = database.list('infos');
  }

  getInfos() {
    return this.infos;
  }

  addInfo(newInfo: Info) {
    this.infos.push(newInfo);
}

  getInfoById(infoId: string){
    return this.database.object('infos/' + infoId);
  }
}
