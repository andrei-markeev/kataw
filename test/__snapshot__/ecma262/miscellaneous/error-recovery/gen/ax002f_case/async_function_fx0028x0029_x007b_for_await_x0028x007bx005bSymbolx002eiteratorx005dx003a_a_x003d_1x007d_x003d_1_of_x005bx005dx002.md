# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: async function f() { for await ({[Symbol.iterator]: a = 1} = 1 of []) ; }
## Options

`````js
{}
`````
## Input

`````js
async function f() { for await ({[Symbol.iterator]: a = 1} = 1 of []) ; }
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
                "text": "f",
                "rawText": "f",
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
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 30
                            },
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
                                                    "kind": 194,
                                                    "expression": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 134299649,
                                                            "text": "Symbol",
                                                            "rawText": "Symbol",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 34,
                                                            "end": 40
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "iterator",
                                                            "rawText": "iterator",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 41,
                                                            "end": 49
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 34,
                                                        "end": 49
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 50
                                                },
                                                "right": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 51,
                                                        "end": 53
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 53,
                                                        "end": 55
                                                    },
                                                    "right": {
                                                        "kind": 201392130,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 57
                                                    },
                                                    "flags": 0,
                                                    "transformFlags": 128,
                                                    "start": 33,
                                                    "end": 57
                                                },
                                                "flags": 32,
                                                "transformFlags": 128,
                                                "start": 33,
                                                "end": 57
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 57
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 32,
                                    "end": 58
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 60
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 62
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 32,
                                "end": 62
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 65
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 67
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 65,
                                "end": 68
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 69,
                                "end": 71
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 71
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 71
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 73
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "async function f() { for await ({[Symbol.iterator]: a = 1} = 1 of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 73
}
```

### Printed

```javascript
async function f() {
  for await ({ [Symbol.iterator]: a = 1 } = 1 of []);
}
```

### Diagnostics

```javascript
✔ No errors
```

