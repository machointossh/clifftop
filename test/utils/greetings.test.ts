import {getGreetings} from '@/utils/greetings';
import {expect} from 'chai';

describe('getGreetings', () => {
  it('returns good morning', () => {
    const result = getGreetings(6);
    expect(result).to.equal('Good morning');
  });

  it('returns good afternoon', () => {
    const result = getGreetings(12);
    expect(result).to.equal('Good afternoon');
  });

  it('returns good evening', () => {
    const result = getGreetings(18);
    expect(result).to.equal('Good evening');
  });

  it('returns good night', () => {
    const result = getGreetings(1);
    expect(result).to.equal('Good night');
  });
});
