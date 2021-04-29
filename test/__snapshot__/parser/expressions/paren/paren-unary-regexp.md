# Kataw parser test case

## Input

`````js
(delete /a/g.x);
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
                "kind": 121,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 4259886,
                        "flags": 64,
                        "start": 1,
                        "end": 7
                    },
                    "expression": {
                        "kind": 129,
                        "member": {
                            "kind": 221,
                            "text": "/a/g",
                            "flags": 96,
                            "start": 7,
                            "end": 12
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "(delete /a/g.x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
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
