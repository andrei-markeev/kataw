# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: class C { set x(_) { super(
## Options

`````js
{}
`````
## Input

`````js
({ get x() { class C { set x(_) { super( } })
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": {
                                    "kind": 16498,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 6
                                },
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 6,
                                        "end": 8
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 1056,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "returnType": null,
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
                                                        "start": 12,
                                                        "end": 18
                                                    },
                                                    "name": {
                                                        "kind": 134299649,
                                                        "text": "C",
                                                        "rawText": "C",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 20
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
                                                                    "asyncKeyword": null,
                                                                    "setKeyword": null,
                                                                    "getKeyword": {
                                                                        "kind": 16499,
                                                                        "flags": 64,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 26
                                                                    },
                                                                    "asteriskToken": null,
                                                                    "method": {
                                                                        "kind": 209,
                                                                        "name": {
                                                                            "kind": 134299649,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 26,
                                                                            "end": 28
                                                                        },
                                                                        "typeParameters": null,
                                                                        "formalParameterList": {
                                                                            "kind": 214,
                                                                            "formalParameters": [
                                                                                {
                                                                                    "kind": 134299649,
                                                                                    "text": "_",
                                                                                    "rawText": "_",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 29,
                                                                                    "end": 30
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "flags": 608,
                                                                            "transformFlags": 0,
                                                                            "start": 29,
                                                                            "end": 31
                                                                        },
                                                                        "returnType": null,
                                                                        "contents": {
                                                                            "kind": 216,
                                                                            "functionStatementList": {
                                                                                "kind": 217,
                                                                                "directives": [],
                                                                                "statements": [
                                                                                    {
                                                                                        "kind": 120,
                                                                                        "expression": {
                                                                                            "kind": 131,
                                                                                            "expression": {
                                                                                                "kind": 4259935,
                                                                                                "flags": 96,
                                                                                                "transformFlags": 0,
                                                                                                "start": 33,
                                                                                                "end": 39
                                                                                            },
                                                                                            "argumentList": {
                                                                                                "kind": 256,
                                                                                                "elements": [],
                                                                                                "trailingComma": false,
                                                                                                "flags": 32,
                                                                                                "transformFlags": 0,
                                                                                                "start": 40,
                                                                                                "end": 40
                                                                                            },
                                                                                            "flags": 32,
                                                                                            "transformFlags": 1,
                                                                                            "start": 33,
                                                                                            "end": 40
                                                                                        },
                                                                                        "flags": 16,
                                                                                        "transformFlags": 4096,
                                                                                        "start": 33,
                                                                                        "end": 40
                                                                                    }
                                                                                ],
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 33,
                                                                                "end": 40
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 31,
                                                                            "end": 42
                                                                        },
                                                                        "flags": 512,
                                                                        "transformFlags": 0,
                                                                        "start": 28,
                                                                        "end": 42
                                                                    },
                                                                    "flags": 512,
                                                                    "transformFlags": 0,
                                                                    "start": 22,
                                                                    "end": 42
                                                                }
                                                            ],
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 22,
                                                            "end": 42
                                                        },
                                                        "flags": 20,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 44
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 44
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 44
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 44
                                    },
                                    "flags": 1056,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 44
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 44
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 44
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "({ get x() { class C { set x(_) { super( } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 33, end: 40
✖ Expected a ')' to match the '(' token here - start: 41, end: 42
✖ The parser expected to find a '}' to match the '{' token here - start: 44, end: 45

```

