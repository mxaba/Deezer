import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @Input() namePased: string = "";
  @Output() onChange = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
