import { CapitlizePipe } from './capitlize.pipe';

describe('CapitlizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitlizePipe();
    expect(pipe).toBeTruthy();
  });
});
