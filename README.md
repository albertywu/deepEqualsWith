# deepEqualsWith

Performs a deep equality check on two members, with support for custom equality function for primitive types.

### Usage:
```javascript
var isEqual = deepEqualWith(a, b, primitiveEquals)
```

where `a`, `b` are things we're testing equality for, and primitiveEquals is an optional hash from primitiveType => equalityFn with the shape:

```javascript
primitiveEquals = {
  string: (a, b) => boolean,
  number: (a, b) => boolean,
  ...
}
```
