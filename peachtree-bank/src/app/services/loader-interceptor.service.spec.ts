import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { LoaderInterceptorService } from './loader-interceptor.service';

describe('LoaderInterceptorService', () => {
  let service: LoaderInterceptorService;

  beforeEach(() => {
    const loaderServiceStub = () => ({ isLoading: { next: () => ({}) } });
    TestBed.configureTestingModule({
      providers: [
        LoaderInterceptorService,
        { provide: LoaderService, useFactory: loaderServiceStub }
      ]
    });
    service = TestBed.get(LoaderInterceptorService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
