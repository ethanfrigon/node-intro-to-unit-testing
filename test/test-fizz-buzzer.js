'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('fizzBuzzer');

describe('fizzbuzzer', function(){

  it('should return fizzbuzz for numbers divisible by 15', function(){
    const answer = fizzBuzzer(30);
    expect(answer).to.equal('fizzbuzz');
  } )


  
})