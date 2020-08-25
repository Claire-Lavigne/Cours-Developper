# Python
## Bases
```python
#This is a comment.

"""
This is a comment
written in
more than just one line
"""

print("Python is " + x)
```

## Variable
```python
x = 5

# Legit names
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# Declare multiple variables
x, y, z = "Orange", "Banana", "Cherry"

# Declare multiple variable with same value
x = y = z = "Orange"
```

## Types
- Text Type:
  - str => `"John"` or `'John'`
- Numeric Types:
  - int => `12`
  - float => `12.5`
  - complex => `15j`
- Sequence Types:	
  - list => `["apple", "banana", "cherry"]`
  - tuple => `("apple", "banana", "cherry")`
  - range => `range(6)`
- Mapping Type:
  - dict => `{"name" : "John", "age" : 36}`
- Set Types:
  - set => `{"apple", "banana", "cherry"}`
  - frozenset => `frozenset({"apple", "banana", "cherry"})`
- Boolean Type:
  - bool => `True`
- Binary Types:	
  - bytes => `b"Hello"`
  - bytearray => `bytearray(5)`
  - memoryview => `memoryview(bytes(5))`

# Functions
```python
def myfunc():
  global x = "fantastic"    # global variable
  print("Python is " + x)

myfunc()
```
