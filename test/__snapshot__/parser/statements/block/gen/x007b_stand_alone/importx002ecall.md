# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: import.call
## Input

`````js
{ import.call
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 207,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 0,
                                "start": 1,
                                "end": 8
                            },
                            "flags": 8,
                            "start": 96,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "{ import.call",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Cannot use 'import.meta' outside a module - start: 13, end: 13

```
