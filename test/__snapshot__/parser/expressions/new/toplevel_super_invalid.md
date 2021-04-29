# Kataw parser test case

## Input

`````js
new super
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 203,
                    "chain": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 9,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "new super",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 9, end: 9
✖ Dot property must be an identifier - start: 9, end: 9

```
