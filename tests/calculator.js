 let homepage = require('../Pages/homepage');

describe('demo calculator tests',function(){
    it('addition test',function(){
   
       // browser.get('https://juliemr.github.io/protractor-demo/');
       homepage.get('https://juliemr.github.io/protractor-demo/');
       
        //  element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');
       
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();
       
       //var result = element(by.cssContainingText('.ng-binding','5'));
       //expect(result.getText()).toBe('7-','value not marching');
       homepage.verifyResult('7');
       browser.sleep(2000);
    });
    it('substraction test',function(){
   
        // browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
         //  element(by.model('first')).sendKeys('2');
         homepage.enterFirstNumber('4');
        
         //element(by.model('second')).sendKeys('3');
         homepage.enterSecondNumber('3');
         
         //element(by.css('[ng-click="doAddition()"]')).click();
         homepage.clickGo1();
        
        //var result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toBe('7-','value not marching');
        homepage.verifyResult('7');
        browser.sleep(2000);
     });
});