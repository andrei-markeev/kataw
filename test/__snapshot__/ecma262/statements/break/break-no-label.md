# Kataw parser test case

## Input

`````js
 while (x) { break; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 18
                            },
                            "label": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 19
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 10,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": " while (x) { break; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
while (x) {
    break;
  }
```

### Diagnostics

```javascript
✔ No errors
```

