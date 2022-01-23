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
    { id: 11, name: 'iphone 12', url: 'www.amazon.com'},
    { id: 12, name: 'Samsung s20' ,url: 'www.ebay.com'},
    { id: 13, name: 'Milk low fat', url: 'www.tesco.ie' }
   
  ];

}
