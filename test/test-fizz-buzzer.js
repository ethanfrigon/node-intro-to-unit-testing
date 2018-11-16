'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

  it('should return the input number for numbers not divisible by 3,5,15', function(){
    const answer = fizzBuzzer(17);
    expect(answer).to.equal(17);
  });

  it('should return fizzbuzz for numbers divisible by 15', function(){
    const answer = fizzBuzzer(30);
    expect(answer).to.equal('fizz-buzz');
  });
  
  it('should return fizz for numbers divisible by 3', function(){
    const answer = fizzBuzzer(6);
    expect(answer).to.equal('fizz');
  });

  it('should return buzz for numbers divisible by 5', function(){
    const answer = fizzBuzzer(1055);
    expect(answer).to.equal('buzz');
  });
  
  it('should return an error if the input is not a number', function(){
    // const answer = fizzBuzzer('foo');
    expect(function(){
      fizzBuzzer('foo');
    }).to.throw(Error);
  });

  
});