# Kataw parser test case

## Input

`````js
async function g(){let o = {*f(foo = [h, {m: t(await bar)}]){}}    }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 351,
                                                        "asyncKeyword": null,
                                                        "asteriskToken": {
                                                            "kind": 201360950,
                                                            "flags": 64,
                                                            "transformFlags": 32,
                                                            "start": 28,
                                                            "end": 29
                                                        },
                                                        "getKeyword": null,
                                                        "setKeyword": null,
                                                        "method": {
                                                            "kind": 209,
                                                            "name": {
                                                                "kind": 134299649,
                                                                "text": "f",
                                                                "rawText": "f",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 29,
                                                                "end": 30
                                                            },
                                                            "typeParameters": null,
                                                            "formalParameterList": {
                                                                "kind": 214,
                                                                "formalParameters": [
                                                                    {
                                                                        "kind": 281,
                                                                        "ellipsisToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 34
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "right": {
                                                                            "kind": 119,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 134299649,
                                                                                        "text": "h",
                                                                                        "rawText": "h",
                                                                                        "flags": 96,
                                                                                        "transformFlags": 0,
                                                                                        "start": 38,
                                                                                        "end": 39
                                                                                    },
                                                                                    {
                                                                                        "kind": 220,
                                                                                        "propertyList": {
                                                                                            "kind": 218,
                                                                                            "properties": [
                                                                                                {
                                                                                                    "kind": 219,
                                                                                                    "asteriskToken": null,
                                                                                                    "left": {
                                                                                                        "kind": 134299649,
                                                                                                        "text": "m",
                                                                                                        "rawText": "m",
                                                                                                        "flags": 96,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 42,
                                                                                                        "end": 43
                                                                                                    },
                                                                                                    "right": {
                                                                                                        "kind": 131,
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "t",
                                                                                                            "rawText": "t",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 44,
                                                                                                            "end": 46
                                                                                                        },
                                                                                                        "argumentList": {
                                                                                                            "kind": 256,
                                                                                                            "elements": [
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "await",
                                                                                                                    "rawText": "await",
                                                                                                                    "flags": 96,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 47,
                                                                                                                    "end": 52
                                                                                                                },
                                                                                                                {
                                                                                                                    "kind": 134299649,
                                                                                                                    "text": "bar",
                                                                                                                    "rawText": "bar",
                                                                                                                    "flags": 96,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 52,
                                                                                                                    "end": 56
                                                                                                                }
                                                                                                            ],
                                                                                                            "trailingComma": false,
                                                                                                            "flags": 32,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 47,
                                                                                                            "end": 56
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 1,
                                                                                                        "start": 42,
                                                                                                        "end": 57
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 128,
                                                                                                    "start": 42,
                                                                                                    "end": 57
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 16,
                                                                                            "transformFlags": 0,
                                                                                            "start": 42,
                                                                                            "end": 57
                                                                                        },
                                                                                        "flags": 48,
                                                                                        "transformFlags": 8,
                                                                                        "start": 40,
                                                                                        "end": 58
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 38,
                                                                                "end": 58
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 8,
                                                                            "start": 36,
                                                                            "end": 59
                                                                        },
                                                                        "flags": 34,
                                                                        "transformFlags": 4096,
                                                                        "start": 31,
                                                                        "end": 59
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 162,
                                                                "transformFlags": 0,
                                                                "start": 31,
                                                                "end": 60
                                                            },
                                                            "returnType": null,
                                                            "contents": {
                                                                "kind": 216,
                                                                "functionStatementList": {
                                                                    "kind": 217,
                                                                    "directives": [],
                                                                    "statements": [],
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 61,
                                                                    "end": 61
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 62
                                                            },
                                                            "flags": 160,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 62
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 62
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 62
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 26,
                                            "end": 63
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 22,
                                        "end": 63
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 63
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 63
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 63
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 68
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "async function g(){let o = {*f(foo = [h, {m: t(await bar)}]){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 53, end: 56

```

