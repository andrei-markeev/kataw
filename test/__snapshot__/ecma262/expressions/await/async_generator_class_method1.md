# Kataw parser test case

## Input

`````js
async function g(){class x {async *f(foo = [h, {m: t(await bar)}]){}}    }
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 24
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 33
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 36
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
                                                                "start": 37,
                                                                "end": 40
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
                                                                            "start": 44,
                                                                            "end": 45
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
                                                                                            "start": 48,
                                                                                            "end": 49
                                                                                        },
                                                                                        "right": {
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "t",
                                                                                                "rawText": "t",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 50,
                                                                                                "end": 52
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [
                                                                                                    {
                                                                                                        "kind": 208,
                                                                                                        "awaitKeyword": {
                                                                                                            "kind": 82196,
                                                                                                            "flags": 64,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 53,
                                                                                                            "end": 58
                                                                                                        },
                                                                                                        "expression": {
                                                                                                            "kind": 134299649,
                                                                                                            "text": "bar",
                                                                                                            "rawText": "bar",
                                                                                                            "flags": 96,
                                                                                                            "transformFlags": 0,
                                                                                                            "start": 58,
                                                                                                            "end": 62
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 4096,
                                                                                                        "start": 53,
                                                                                                        "end": 62
                                                                                                    }
                                                                                                ],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 53,
                                                                                                "end": 62
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 1,
                                                                                            "start": 48,
                                                                                            "end": 63
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 128,
                                                                                        "start": 48,
                                                                                        "end": 63
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 63
                                                                            },
                                                                            "flags": 48,
                                                                            "transformFlags": 8,
                                                                            "start": 46,
                                                                            "end": 64
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 64
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 8,
                                                                "start": 42,
                                                                "end": 65
                                                            },
                                                            "flags": 34,
                                                            "transformFlags": 4096,
                                                            "start": 37,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 418,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 66
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
                                                        "start": 67,
                                                        "end": 67
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 66,
                                                    "end": 68
                                                },
                                                "flags": 384,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 68
                                            },
                                            "flags": 384,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 68
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 68
                                },
                                "flags": 26,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 69
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 69
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 74
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "async function g(){class x {async *f(foo = [h, {m: t(await bar)}]){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 53, end: 58

```

