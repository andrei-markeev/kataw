# Kataw parser test case

## Input

`````js
do async
 ()
 while (y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 8
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 2
                    },
                    "flags": 33,
                    "transformFlags": 1,
                    "start": 2,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 12
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 12,
                "end": 19
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "do async\n ()\n while (y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 2, end: 8

```

