# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: ext\u0065nds
## Input

`````js
ext\u0065nds = x;
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "start": 14,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "ext\\u0065nds = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 12
✖ Statement expected - start: 12, end: 14

```
