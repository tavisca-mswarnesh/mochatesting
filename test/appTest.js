const assert =require('chai').assert;
const app=require('../src/app');
describe("sayHello",function(){
    it('sayHello should return hello world',function(){
        assert.equal(app.sayHello(),"hello world");
    });
    it('sayHello should return string',function(){
        this.retries(10);
        
        assert.typeOf(app.sayHello(),"string");
    });
     
});

describe('a suite of tests', function() {
    this.timeout(500);
  
    it('should take less than 500ms', function(done) {
      setTimeout(done, 300);
    });
  
    it('should take less than 500ms as well', function(done) {
      setTimeout(done, 250);
    });
  });