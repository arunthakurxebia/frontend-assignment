import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef,) {}

  /**
   * Operations to perform on initialize
   *
   * @memberof LoaderComponent
   */
  ngOnInit() {
    this.loaderService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }

}
