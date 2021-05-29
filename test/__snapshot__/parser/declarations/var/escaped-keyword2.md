# Kataw parser test case

## Input

`````js

var \u0062\u0072\u0065\u0061\u006b = 123;



`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 0,
                "end": 4
            },
            "declarationList": {
                "kind": 156,
                "declarations": [],
                "flags": 16,
                "start": 4,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 16464,
                "start": 4,
                "end": 35
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 35,
                "end": 35
            },
            "flags": 16,
            "start": 4,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 123,
                "rawText": "123",
                "flags": 96,
                "start": 37,
                "end": 41
            },
            "flags": 16,
            "start": 37,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "\nvar \\u0062\\u0072\\u0065\\u0061\\u006b = 123;\n\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 4, end: 35
✖ Keywords cannot contain escape characters - start: 4, end: 35
✖ Expression expected - start: 35, end: 37
✖ Missing label - start: 35, end: 37

```
