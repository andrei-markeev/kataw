# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Options

`````js
{}
`````
## Input

`````js
async function g(){let o = {async *f(foo = await bar){}}    }
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
                                                        "asyncKeyword": {
                                                            "kind": 82031,
                                                            "flags": 352,
                                                            "transformFlags": 0,
                                                            "start": 28,
                                                            "end": 33
                                                        },
                                                        "asteriskToken": {
                                                            "kind": 201360950,
                                                            "flags": 64,
                                                            "transformFlags": 32,
                                                            "start": 33,
                                                            "end": 35
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
                                                                            "kind": 208,
                                                                            "awaitKeyword": {
                                                                                "kind": 82196,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 42,
                                                                                "end": 48
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "bar",
                                                                                "rawText": "bar",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 52
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 4096,
                                                                            "start": 42,
                                                                            "end": 52
                                                                        },
                                                                        "flags": 34,
                                                                        "transformFlags": 4096,
                                                                        "start": 37,
                                                                        "end": 52
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 418,
                                                                "transformFlags": 0,
                                                                "start": 37,
                                                                "end": 53
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
                                                                    "start": 54,
                                                                    "end": 54
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 55
                                                            },
                                                            "flags": 416,
                                                            "transformFlags": 0,
                                                            "start": 36,
                                                            "end": 55
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 55
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 55
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 26,
                                            "end": 56
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 22,
                                        "end": 56
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 56
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 56
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 56
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 61
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 42, end: 48

```

