# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/declaration_paren
> :: test: declaration_paren
> :: case: set #await(test) {}
## Options

`````js
{}
`````
## Input

`````js
(class extends Base { set #await(test) {} });
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
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
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
                                        "start": 21,
                                        "end": 25
                                    },
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 67191035,
                                            "text": "#await",
                                            "rawText": "#await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 32
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "test",
                                                    "rawText": "test",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 37
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 608,
                                            "transformFlags": 0,
                                            "start": 33,
                                            "end": 38
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
                                                "start": 40,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "flags": 512,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 41
                                    },
                                    "flags": 512,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 41
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 43
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 43
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "(class extends Base { set #await(test) {} });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript
(class extends Base {
    set #await(test) {}
  });
```

### Diagnostics

```javascript
✔ No errors
```

