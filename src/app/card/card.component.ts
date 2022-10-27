import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DeezerApiServicesService } from '../services/deezer-api-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() cardCalledFor: string = ""
  @Input() Albums: string = ""
  vlaue: any;
  @Output() click = new EventEmitter();



  constructor(public api: DeezerApiServicesService,) { }

  ngOnInit(): void {
  }

  change(value: any) {
    this.click.emit({value: value})
  }

}
