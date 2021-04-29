# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside an async func
> :: case: c\u006fntinue
## Input

`````js
async () => {  c\u006fntinue = x  }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 8,
                "end": 11
            },
            "typeParameters": null,
            "parameters": [],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 172,
                            "continueKeyword": {
                                "kind": 37757009,
                                "flags": 16384,
                                "start": 13,
                                "end": 28
                            },
                            "label": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 28,
                                "end": 28
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 13,
                    "end": 28
                },
                "flags": 32,
                "start": 11,
                "end": 28
            },
            "flags": 288,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 30,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "async () => {  c\\u006fntinue = x  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 13, end: 28
✖ Expression expected - start: 28, end: 30
✖ Statement expected - start: 28, end: 30
✖ Statement expected - start: 32, end: 35

```
