import { AmountDirective } from './amount.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};
describe('AmountDirective', () => {
  it('should create an instance', () => {
    const directive = new AmountDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
