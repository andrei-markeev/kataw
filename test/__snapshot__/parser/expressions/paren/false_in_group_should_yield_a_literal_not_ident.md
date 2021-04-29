# Kataw parser test case

## Input

`````js
(false);

(false, true);
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
                    "kind": 134,
                    "text": false,
                    "flags": 96,
                    "start": 1,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134,
                            "text": false,
                            "flags": 96,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 134,
                            "text": true,
                            "flags": 96,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "flags": 32,
                    "start": 8,
                    "end": 22
                },
                "flags": 32,
                "start": 8,
                "end": 23
            },
            "flags": 16,
            "start": 8,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "(false);\n\n(false, true);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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
