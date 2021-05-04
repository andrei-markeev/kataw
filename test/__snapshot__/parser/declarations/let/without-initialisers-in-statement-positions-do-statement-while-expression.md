# Kataw parser test case

## Input

`````js
do let x; while (false)
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
                "start": 8,
                "end": 8
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "start": 2,
                    "end": 6
                },
                "flags": 16,
                "start": 2,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 9,
                "end": 15
            },
            "expression": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 17,
                "end": 22
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "start": 23,
                "end": 23
            },
            "flags": 16,
            "start": 9,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "do let x; while (false)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 6, end: 8
✖ Expression expected - start: 8, end: 9
✖ Expression expected - start: 23, end: 23

```
