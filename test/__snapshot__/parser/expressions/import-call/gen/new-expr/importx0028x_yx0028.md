# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: new-expr
> :: case: import(x,y(
## Input

`````js
import(x,y(
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 0,
                            "start": 0,
                            "end": 6
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 7,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 11,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 6,
                "end": 11
            },
            "flags": 16,
            "start": 6,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "import(x,y(",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
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
