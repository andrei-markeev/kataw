# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: do while
> :: case: catch try {}
## Input

`````js
do catch try {} while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 21,
                "end": 21
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 15,
                "end": 21
            },
            "statement": {
                "kind": 159,
                "tryKeyword": null,
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 8,
                        "end": 8
                    },
                    "flags": 16,
                    "start": 8,
                    "end": 8
                },
                "catchClause": null,
                "finallyKeyword": null,
                "finallyBlock": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 14,
                        "end": 14
                    },
                    "flags": 16,
                    "start": 12,
                    "end": 15
                },
                "flags": 16,
                "start": 2,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "do catch try {} while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 21, end: 21

```
