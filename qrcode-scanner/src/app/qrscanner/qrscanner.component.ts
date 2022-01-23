import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent implements OnInit {
  public myAngularxQrCode: string;

  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit(): void {
  }

  updateQr(product:any) {
    console.log("inside update qr");
    this.myAngularxQrCode = ""+product.name + " url:- "+product.url;
  }

  productList: any[] = [
    { id: 11, name: 'iphone 12', url: 'www.amazon.com',date :'23-Jan-2022'},
    { id: 12, name: 'Samsung s20' ,url: 'www.ebay.com',date :'22-Jan-2022'},
    { id: 13, name: 'Milk low fat', url: 'www.tesco.ie',date :'21-Jan-2022' },
    { id: 14, name: 'iphone 13', url: 'www.amazon.com',date :'23-Jan-2022'},
    { id: 15, name: 'Samsung s21' ,url: 'www.ebay.com',date :'22-Jan-2022'},
    { id: 16, name: 'Soy Milk', url: 'www.tesco.ie',date :'21-Jan-2022' }
   
  ];

}
