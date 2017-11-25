'use strict'

const assert = require('assert')

describe('weedout', () => {
  const weedout = require('../src')

  it('removes root keys', () => {
    let src = {
      foo: 'bar'
    }

    weedout(src, 'foo')

    assert.equal(src.foo, undefined)
  })

  it('ignores undefined root keys', () => {
    let src = {
      foo: 'bar'
    }

    weedout(src, 'bar')

    assert.deepEqual(src, {
      foo: 'bar'
    })
  })

  it('removes nested keys', () => {
    let src = {
      foo: {
        bar: {
          baz: '42'
        }
      }
    }

    weedout(src, 'foo.bar.baz')

    assert.deepEqual(src.foo.bar, {})
  })

  it('ignores undefined nested keys', () => {
    let src = {
      foo: {
        bar: {
          baz: '42'
        }
      }
    }

    weedout(src, 'baz.bar.foo')

    assert.deepEqual(src, {
      foo: {
        bar: {
          baz: '42'
        }
      }
    })
  })

  it('removes keys inside object arrays', () => {
    let src = {
      foo: [{
        bar: {
          baz: '3.14'
        }
      }, {
        bar: {
          baz: 'pi'
        }
      }]
    }

    weedout(src, 'foo.bar.baz')

    src.foo.forEach((foo) => {
      assert.deepEqual(foo.bar, {})
    })
  })

  it('removes keys inside object arrays inside object arrays', () => {
    let src = {
      foo: [{
        bar: [{
          baz: 'to'
        }, {
          baz: 'be'
        }]
      }, {
        bar: [{
          baz: 'or'
        }, {
          baz: 'not'
        }]
      }]
    }

    weedout(src, 'foo.bar.baz')

    src.foo.forEach((foo) => {
      foo.bar.forEach((bar) => {
        assert.deepEqual(bar, {})
      })
    })
  })
})
