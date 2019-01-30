import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TesteImgGoogleMaps';
  private apiKey = 'YOU_API_KEY';
  private makerColor = 'red';
  private coords = '-23.572278,-46.664689';
  private imgSize = '800x600';
  private zoom = '18';

  getUrlGoogleMaps(): string {
    // tslint:disable-next-line:max-line-length
    const url = `http://maps.googleapis.com/maps/api/staticmap?zoom=${this.zoom}&size=${this.imgSize}&markers=size:mid|color:${this.makerColor}|${this.coords}&sensor=false&key=${this.apiKey}`;

    return url;
  }

}
