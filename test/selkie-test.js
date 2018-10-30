const Selkie = require('../lib/selkie.js');
const assert = require('chai').assert;

describe('Selkie class', () => {

  it('should be a class', () => {
    assert.isFunction(Selkie);
    assert.isObject(new Selkie());
  });

  it('should take in a name', () => {
    let louisa = new Selkie('Louisa');

    assert.equal(louisa.name, 'Louisa');
  })

  it('should have the form of a seal by default', () => {
    let robbie = new Selkie('Robbie');

    assert.equal(robbie.form, 'seal');
  })

  it('should be able to start in human form', () => {
    let leta = new Selkie('Leta', 'human');

    assert.equal(leta.form, 'human');
  })

  it('should be able to transform from seal to human', () => {
    let robbie = new Selkie('Robbie');

    robbie.transform();

    assert.equal(robbie.form, 'human');
  })

  it('should be able to transform from human to seal', () => {
    let robbie = new Selkie('Robbie');

    robbie.transform();
    robbie.transform();

    assert.equal(robbie.form, 'seal');
  })

  it('should not be able to lose posession of their sealskin if in seal form', () => {
    let will = new Selkie('Will');

    will.loseSealSkin();

    assert.equal(will.posessSealSkin, true);
  })

  it('should be able to lose posession of their sealskin if in human form', () => {
    let will = new Selkie('Will');

    will.transform();
    will.loseSealSkin();

    assert.equal(will.posessSealSkin, false);
  })

  it('should not be able to turn from human to seal without their sealskin', () => {
    let christie = new Selkie('Christie');

    christie.transform();
    christie.loseSealSkin();
    christie.transform();

    assert.equal(christie.form, 'human');
  })

  it('should be able to recover their sealskin', () => {
    let pam = new Selkie('Pam');

    pam.loseSealSkin();
    pam.regainSealSkin();

    assert.equal(pam.posessSealSkin, true);
  })
})
