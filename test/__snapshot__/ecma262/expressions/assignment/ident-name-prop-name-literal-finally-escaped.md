# Kataw parser test case

## Input

`````js
var y = { \u0066inally: x } = { finally: 42 };
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
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
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
                                                "text": "finally",
                                                "rawText": "\\u0066inally",
                                                "flags": 16480,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 22
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 23,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 9,
                                            "end": 25
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16400,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 25
                                },
                                "flags": 16432,
                                "transformFlags": 8,
                                "start": 7,
                                "end": 27
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 29
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "finally",
                                                "rawText": "finally",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 39
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 43
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 31,
                                            "end": 43
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 43
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 29,
                                "end": 45
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 7,
                            "end": 45
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 45
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "var y = { \\u0066inally: x } = { finally: 42 };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
var y = { \u0066inally: x } = { finally: 42 };
```

### Diagnostics

```javascript
✔ No errors
```

