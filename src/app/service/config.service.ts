import { Injectable } from '@angular/core';

interface IKeys {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  keys: IKeys[] = [
    {
      key: 'id',
      title: '#',
    },
    {
      key: 'name',
      title: 'Név',
    },
    {
      key: 'level',
      title: 'Szint',
    },
    {
      key: 'description',
      title: 'Leírás',
    },
    {
      key: 'image_small',
      title: 'Kép file neve',
    },
    {
      key: 'image_large',
      title: 'Kép file neve',
    },
    {
      key: 'codeLow',
      title: 'CL',
    },
    {
      key: 'codeMiddle',
      title: 'CM',
    },
    {
      key: 'codeHigh',
      title: 'CH',
    },
  ];

  constructor() { }
}
