# Kataw parser test case

## Input

`````js
~a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65585,
                    "flags": 64,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 1,
                    "end": 2
                },
                "flags": 32,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "text": "~a",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 2
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
