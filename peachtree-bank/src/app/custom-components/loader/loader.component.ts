import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading = true;
  constructor(private loaderService: LoaderService) { }

  /**
   * Operations to perform on initialize
   *
   */
  ngOnInit() {
    this.loaderService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }

}
