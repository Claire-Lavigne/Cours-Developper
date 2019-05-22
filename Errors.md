## Possible errors

* Syntax : typos, missing brackets, wrong number of quotes, etc.
* Logic : erroneous conditions, forgetting to increment the index in a loop (infinite loop)
* Runtime : external ressource (networks, databases, or users)

## Resolve errors

* Being aware of where they may occur
* Using error handling techniques

```javascript
// Testing data
if (dataExists && dataIsValid) {
    // use data here
} else {
    // handle error here
}

// Trying blocks to catch an error
try {
    // error-prone code here
} catch (error) {
    // react to error here
}
```
