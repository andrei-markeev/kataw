# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case: async function foo(a = () => { "use strict"; return eval =>("x"); }) {}
## Options

`````js
{}
`````
## Input

`````js
async function foo(a = () => { "use strict"; return eval =>("x"); }) {}
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 18
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 28
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [
                                        {
                                            "kind": 201392131,
                                            "text": "use strict",
                                            "rawText": "\"use strict\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 43
                                        }
                                    ],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 51
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "asyncKeyword": null,
                                                "typeParameters": null,
                                                "arrowPatameterList": {
                                                    "kind": 134299649,
                                                    "text": "eval",
                                                    "rawText": "eval",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 51,
                                                    "end": 56
                                                },
                                                "returnType": null,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 56,
                                                    "end": 59
                                                },
                                                "contents": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 201392131,
                                                        "text": "x",
                                                        "rawText": "\"x\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 63
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 59,
                                                    "end": 64
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 51,
                                                "end": 64
                                            },
                                            "flags": 16,
                                            "transformFlags": 256,
                                            "start": 44,
                                            "end": 65
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 65
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 67
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 67
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 19,
                        "end": 67
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 19,
                "end": 67
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 70
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 68,
                "end": 71
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "async function foo(a = () => { \"use strict\"; return eval =>(\"x\"); }) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript
async function foo(a = () => {

  "\"use strict\"";
  return eval => ("\"x\"");
}) {}
```

### Diagnostics

```javascript
✔ No errors
```

