import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term: any = "";


  ngOnInit() {

  }

  getValue(event: Event): string {
    this.term = (event.target as HTMLInputElement).value;
    return (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
