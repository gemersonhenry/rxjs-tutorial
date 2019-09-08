import { Component, OnInit } from '@angular/core';
import { ChangeDetectorService } from '../../change-detector.service';

@Component({
  selector: 'bz-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public text = '';

  constructor(
    private changeDetector: ChangeDetectorService,
  ) { }

  ngOnInit() {
    this.changeDetector.change$.subscribe(() => {
      this.text = 'menu now knows that something has changed';
    });
  }

}
