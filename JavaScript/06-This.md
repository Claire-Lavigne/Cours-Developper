# When `this` is called inside a 

## Method :
- **`this` = that object**
- **`this` = invisible argument for every method**
```javascript
var object = {
    property: 1000,
    method: function () {
        return (this.property++).toString(16);
    }
};
console.log(object.method());
```

## Function called with `new` :
 - **`this` = new empty object**
```javascript
function object() {
    this.property1 = 1000;
    this.property2 = object.property2;
}
object.property2 = function() {
    return (this.property1++).toString(16);
};
var userId = new object();
```

## Method (property) of an object defined on prototype called :
 - **`this` = that object**
```javascript
function object() {
    this.property1 = 1000;
}
object.prototype.property2 = function() {
    return (this.property1++).toString(16);
};
var userId = new object();
```
