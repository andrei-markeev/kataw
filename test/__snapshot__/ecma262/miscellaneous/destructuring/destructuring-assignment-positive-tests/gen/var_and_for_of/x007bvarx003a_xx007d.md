# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/destructuring/destructuring-assignment-positive-tests/gen/var_and_for_of
> :: test: var and for of
> :: case: {var: x}
## Options

`````js
{}
`````
## Input

`````js
var x, y, z; for (x of x = {var: x} = z = {});
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 16
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 19
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 26
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
                                        "text": "var",
                                        "rawText": "var",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 28,
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
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 28,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 34
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 26,
                        "end": 35
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 37
                    },
                    "right": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 39
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 41
                        },
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 43
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 41,
                            "end": 44
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 37,
                        "end": 44
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 26,
                    "end": 44
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 22,
                "end": 44
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 45,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var x, y, z; for (x of x = {var: x} = z = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
var x, y, z;
for (x of x = { var: x } = z = {});

```

### Diagnostics

```javascript
✔ No errors
```

