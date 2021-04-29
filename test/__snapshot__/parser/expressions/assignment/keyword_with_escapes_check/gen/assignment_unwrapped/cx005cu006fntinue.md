# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: assignment unwrapped
> :: case: c\u006fntinue
## Input

`````js
c\u006fntinue = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 172,
            "continueKeyword": {
                "kind": 37757009,
                "flags": 16384,
                "start": 0,
                "end": 13
            },
            "label": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "c\\u006fntinue = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 0, end: 13
✖ Expression expected - start: 13, end: 15
✖ Statement expected - start: 13, end: 15

```
