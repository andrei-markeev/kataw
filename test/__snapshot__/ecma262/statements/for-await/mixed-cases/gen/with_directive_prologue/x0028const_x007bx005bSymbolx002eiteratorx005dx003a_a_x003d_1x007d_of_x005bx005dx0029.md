# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/for-await/mixed-cases/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/for-await/mixed-cases/gen/with_directive_prologue
> :: test: with directive prologue
> :: case: (const {[Symbol.iterator]: a = 1} of [])
## Options

`````js
{}
`````
## Input

`````js
async function f() { 'use strict'; let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }
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
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194400,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 33
                        }
                    ],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 38
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 38,
                                        "end": 40
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 40
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 34,
                            "end": 41
                        },
                        {
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 45
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 51
                            },
                            "initializer": {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 37757004,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 58
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 194,
                                                                "expression": {
                                                                    "kind": 129,
                                                                    "member": {
                                                                        "kind": 134299649,
                                                                        "text": "Symbol",
                                                                        "rawText": "Symbol",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 61,
                                                                        "end": 67
                                                                    },
                                                                    "expression": {
                                                                        "kind": 134299649,
                                                                        "text": "iterator",
                                                                        "rawText": "iterator",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 68,
                                                                        "end": 76
                                                                    },
                                                                    "flags": 32,
                                                                    "transformFlags": 2,
                                                                    "start": 61,
                                                                    "end": 76
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 60,
                                                                "end": 77
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 78,
                                                                "end": 80
                                                            },
                                                            "initializer": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 82,
                                                                "end": 84
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 84
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 60,
                                                    "end": 84
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 58,
                                                "end": 85
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 58,
                                            "end": 85
                                        }
                                    ],
                                    "flags": 16777232,
                                    "transformFlags": 0,
                                    "start": 58,
                                    "end": 85
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 85
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 88
                            },
                            "expression": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 90,
                                    "end": 90
                                },
                                "flags": 32,
                                "transformFlags": 8,
                                "start": 88,
                                "end": 91
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 92,
                                "end": 94
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 94
                        }
                    ],
                    "flags": 4194336,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 94
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 96
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "async function f() { 'use strict'; let a; for await (const {[Symbol.iterator]: a = 1} of []) ; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
async function f() {

  "'use strict'";
  let a;
  for await (const { [Symbol.iterator]: a = 1 } of []);
}
```

### Diagnostics

```javascript
✔ No errors
```

