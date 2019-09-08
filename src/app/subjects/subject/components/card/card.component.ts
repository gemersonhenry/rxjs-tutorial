import { Component, OnInit } from '@angular/core';
import { ChangeDetectorService } from '../../change-detector.service';

@Component({
  selector: 'bz-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public text = '';

  constructor(
    private changeDetector: ChangeDetectorService,
  ) { }

  ngOnInit() {
  }

  public changeSomething() {
    this.text = 'card says that something has changed';
    this.changeDetector.emitChange();
  }

}
