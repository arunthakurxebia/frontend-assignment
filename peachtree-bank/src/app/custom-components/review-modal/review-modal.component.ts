import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewModalComponent implements OnInit, OnChanges {
  showModal: boolean;
  @Input() show: boolean;
  @Input() amount: any;
  @Input() toAccount: any;
  @Output() isOpen: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Listen on change event
   *
   * @param {SimpleChanges} changes
   * @memberof ReviewModalComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.showModal = this.show;
  }

  /**
   * Action to perform on modal confirm
   *
   * @param {*} e
   * @memberof ReviewModalComponent
   */
  submitForm(e: any) {
    this.confirm.emit(e);
    this.showModal = false;
  }

  /**
   *Action to perform on close
   *
   * @memberof ReviewModalComponent
   */
  close() {
    this.showModal = false;
    this.isOpen.emit(false);
  }

}
