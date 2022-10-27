import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @Input() namePased: string = "";
  @Output() onChange = new EventEmitter();
  namePassed = ''

  constructor() { }

  ngOnInit(): void {
  }

  change(value: string) {
    this.onChange.emit({value: value})
  }
}
