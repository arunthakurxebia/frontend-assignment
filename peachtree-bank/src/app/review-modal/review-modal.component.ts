import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewModalComponent implements OnInit {
  showModal:boolean;
  @Input() show:boolean;
  @Input() amount:any;
  @Output() isOpen:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showModal = this.show;
  }

  submitForm(e: any){
    this.showModal = false;
  }

  close(){
    this.showModal = false;
    this.isOpen.emit(false);
  }

}
