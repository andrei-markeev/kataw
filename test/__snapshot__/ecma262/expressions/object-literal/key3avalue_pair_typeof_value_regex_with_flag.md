# Kataw parser test case

## Input

`````js
({foo: typeof /x/g});
`````

## Output

### CST

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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 138477613,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 13
                                    },
                                    "operand": {
                                        "kind": 371,
                                        "text": "/x/g",
                                        "rawText": "/x/g",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "transformFlags": 16384,
                                    "start": 6,
                                    "end": 18
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 18
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 19
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "({foo: typeof /x/g});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
({ foo: typeof /x/g });
```

### Diagnostics

```javascript
✔ No errors
```

