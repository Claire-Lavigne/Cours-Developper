# Standard test plan

## Introduction
- Introduce the project and the product that is being tested.
## Features to Test
- List which features are critical or feasible to test and how to test them.

### BDD (behavior-driven development - phrases, no code)
- Map out the behaviors you expect from a certain functionality, using BDD keywords : Given, When, Then, And

### TDD (test-driven development - code that translate the phrases)
- Tests the expected behaviors defined :
  - Red: Write a simple test that fails before it actually has any code accompanying it.
  - Green: Write the simplest code possible to make the test pass, even if it's a little ridiculous.
  - Refactor: the code you wrote to make the test pass is perhaps illogical and messy. Clean it up now. 

## Features to Not Test
- List which features are not valuable or realistic to test (limited time or resources/other restrictions)

# Using Jasmine Framework to implement tests

## Visualize result
- Download ```jasmine-standalone``` zip [last version](https://github.com/jasmine/jasmine/releases))
- write test in new file ```spec/NameSpec.js```
- write code in new file ```src/Name.js```
- run tests opening ```SpecRunner.html``` in web browser

## Describe block
- Suites : ```describe```
- Specs : ``ìt```
- Expectations : ```expect``` ("expect" what was defined with "it")
- Matchers (compares the actual value with the expected value) :
  ```js
  expect(number).toBeGreaterThan(number);   // is "expected value" greater than "real value" ?
  expect(number).toBeLessThan(number);      // is ... less than ... ?
  expect(fn).toThrow(e);                    // is ... throwing an error ?
  expect(instance).toBe(instance);          // 
  expect(mixed).toBeDefined();              // is ... defined ?
  expect(mixed).toBeUndefined();            // is ... undefined
  expect(mixed).toBeNull();                 //
  expect(mixed).toBeTruthy();               // is ... true ?
  expect(mixed).toBeFalsy();                // is ... false ?
  expect(array).toContain(member);          //
  expect(string).toContain(substring);      //
  expect(mixed).toEqual(mixed);             //
  expect(mixed).toMatch(pattern);           //
  
  // example .not.
  expect(6).not.toBeLessThan(6);            // I expect 6 not to be less than 6
  ```
## Example : Describe block
```js
describe("Video player", function() {
  // test that the video plays upon page load
  describe("when the page loads", function() {
    it("should automatically play the video", function() {
      expect(videoPlaying).toBe(true);
    });
  });
  // test that when a user clicks the play button, the video plays
  describe("when user clicks the play button", function() {
    it("should play the video", function() {
      expect(videoPlaying).toBe(true);
    });
  });
  // test video playing functionality here
  describe("when video is played", function() {
    it("should play continuously", function() {
      expect(videoPlaying).toBe(true);
    });
  });
});
```
