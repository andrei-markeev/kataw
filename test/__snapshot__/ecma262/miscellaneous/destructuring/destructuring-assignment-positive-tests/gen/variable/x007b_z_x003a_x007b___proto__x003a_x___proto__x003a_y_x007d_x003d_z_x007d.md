# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/variable
> :: test: variable
> :: case: { z : { __proto__: x, __proto__: y } = z }
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; ({ z : { __proto__: x, __proto__: y } = z } = {});
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 8
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 9,
                        "end": 11
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "asteriskToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 17
                                    },
                                    "right": {
                                        "kind": 125,
                                        "left": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 21,
                                                            "end": 31
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 34
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 21,
                                                        "end": 34
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "__proto__",
                                                            "rawText": "__proto__",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 35,
                                                            "end": 45
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "flags": 36,
                                                        "transformFlags": 128,
                                                        "start": 35,
                                                        "end": 48
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 20,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 48
                                            },
                                            "flags": 52,
                                            "transformFlags": 8,
                                            "start": 19,
                                            "end": 50
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 50,
                                            "end": 52
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 54
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 19,
                                        "end": 54
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 15,
                                    "end": 54
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 54
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 14,
                        "end": 56
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 56,
                        "end": 58
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 60
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 58,
                        "end": 61
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 14,
                    "end": 61
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 12,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 63
        }
    ],
    "isModule": false,
    "source": "var x, y, z; ({ z : { __proto__: x, __proto__: y } = z } = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 63
}
```

### Printed

```javascript
var x, y, z;
({ z: { __proto__: x, __proto__: y } = z } = {});

```

### Diagnostics

```javascript
✔ No errors
```

