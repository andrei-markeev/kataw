# Kataw parser test case

## Input

`````js
do wow: while (x) continue wow; while (x)
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
                "kind": 163,
                "label": {
                    "kind": 134299649,
                    "text": "wow",
                    "rawText": "wow",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 6
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 7
                },
                "statement": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 26
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "wow",
                            "rawText": "wow",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 30
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 31
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 31
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 31
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 31,
                "end": 37
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 39,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "do wow: while (x) continue wow; while (x)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
do  wow:  while (x) continue wow;
while (x);
```

### Diagnostics

```javascript
✔ No errors
```

