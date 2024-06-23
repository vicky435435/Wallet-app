import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  features : any[] = [
    {id: 1, name: 'Top Up', src:  '../../assets/icon/wallet.png', page:''},
    {id: 2, name: 'Withdraw', src:  '../../assets/icon/cash-withdrawal.png', page:''},
    {id: 3, name: 'Send', src:  '../../assets/icon/send.png', page:''},
    {id: 4, name: 'Pay', src:  '../../assets/icon/pay-per-click.png', page:''}
  ];

  transaction : any[] = [
    {id: 1, vendor: 'Pizza', image: '', amount: -1200 , time: '3:00pm'},
    {id: 2, vendor: 'Received', image: '', amount: +200, time: '5:00am,'},
    {id: 1, vendor: 'Movie Ticket', image: '', amount: -200, time: '9:00pm'},
  ]

  constructor() {}

}
