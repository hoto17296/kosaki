import Kosaki from '../'
import assert from 'assert'

describe('Kosaki', () => {

  let kosaki = new Kosaki();

  it('should create a new instance', () => {
    assert.ok(kosaki);
  });

  it('should return random url', () => {
    kosaki.onReady(() => {
      let url = kosaki.random();
      assert.ok( url.match(/^http/) );
    });
  });

})
