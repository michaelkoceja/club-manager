import { Injectable } from '@angular/core';
import { Info } from './info.model';
import { INFOS } from './mock-infos';

@Injectable()
export class InfoService {

  constructor() { }

  getInfos() {
    return INFOS;
  }

  getInfoById(infoId: number) {
  for (var i = 0; i <= INFOS.length - 1; i++) {
    if (INFOS[i].id === infoId) {
      return INFOS[i];
    }
  }
}

}
