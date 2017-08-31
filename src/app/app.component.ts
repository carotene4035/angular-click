import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count :number = 0;

  // 何らかの処理
  countUp() :void {
    this.count ++;
    console.log(this.count + '回クリックしたよ');
  }
}
