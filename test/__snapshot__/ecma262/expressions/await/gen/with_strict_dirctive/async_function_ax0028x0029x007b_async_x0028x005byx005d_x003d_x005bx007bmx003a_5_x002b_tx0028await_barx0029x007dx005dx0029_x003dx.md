# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 28
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 30
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 31,
                "end": 31
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 43
                                },
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 47
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 46,
                                                    "end": 47
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 45,
                                                "end": 48
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [
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
                                                                            "start": 53,
                                                                            "end": 54
                                                                        },
                                                                        "right": {
                                                                            "kind": 198,
                                                                            "left": {
                                                                                "kind": 201392130,
                                                                                "text": 5,
                                                                                "rawText": "5",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 55,
                                                                                "end": 57
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 99634,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 57,
                                                                                "end": 59
                                                                            },
                                                                            "right": {
                                                                                "kind": 131,
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "t",
                                                                                    "rawText": "t",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 59,
                                                                                    "end": 61
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
                                                                                                "start": 62,
                                                                                                "end": 67
                                                                                            },
                                                                                            "expression": {
                                                                                                "kind": 134299649,
                                                                                                "text": "bar",
                                                                                                "rawText": "bar",
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 67,
                                                                                                "end": 71
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 4096,
                                                                                            "start": 62,
                                                                                            "end": 71
                                                                                        }
                                                                                    ],
                                                                                    "trailingComma": false,
                                                                                    "flags": 32,
                                                                                    "transformFlags": 0,
                                                                                    "start": 62,
                                                                                    "end": 71
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 1,
                                                                                "start": 59,
                                                                                "end": 72
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 5120,
                                                                            "start": 53,
                                                                            "end": 72
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 53,
                                                                        "end": 72
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 72
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 52,
                                                            "end": 73
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 52,
                                                    "end": 73
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 50,
                                                "end": 74
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 45,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 75
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 75,
                                    "end": 78
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 80,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 81
                                },
                                "flags": 290,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 81
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 33,
                            "end": 81
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 81
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 87
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 13,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

"'use strict'";
async function a() {
  async ([y] = [{ m: 5 + t(await bar) }]) => {};
}
```

### Diagnostics

```javascript
✔ No errors
```

