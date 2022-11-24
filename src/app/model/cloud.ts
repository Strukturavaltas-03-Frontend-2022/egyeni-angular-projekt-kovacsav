/*{
  "id": 1,
  "name": "Cumulus humilis",
  "level": "low",
  "description": "Gomolyfelhő. Éles körvonalú, sűrű, különálló felhő; függőleges irányban fejlődik növekvő kupola vagy torony alakjában; felső része kelvirágra emlékeztet, napsütötte részei vakítóan fehérek; alapja viszonylag sötét és közelítőleg vízszintes.",
  "precipitation": false,
  "image_small": "/data/img/cu_1_1_s.jpg",
  "image_large": "/data/img/cu_1_1_l.jpg",
  "code": [
    1,
    0,
    0
  ]
}
*/

export class Cloud {
  [x: string]: any;
  id: number = 0;
  name: string = '';
  level: string = '';
  description: string = '';
  precipitation: boolean = false;
  image_small: string = '';
  image_large: string = '';
  codeLow: number | string = 0;
  codeMiddle: number | string = 0;
  codeHigh: number | string = 0;
}
