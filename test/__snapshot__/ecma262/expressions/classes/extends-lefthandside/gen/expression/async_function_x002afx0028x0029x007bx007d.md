# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: async function *f(){}
## Options

`````js
{}
`````
## Input

`````js
(class B extends async function *f(){} {})
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
                    "name": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 8
                    },
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 16
                            },
                            "expression": {
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 31
                                },
                                "asteriskToken": {
                                    "kind": 201360950,
                                    "flags": 64,
                                    "transformFlags": 32,
                                    "start": 31,
                                    "end": 33
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "returnType": null,
                                "flags": 416,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 38
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 38
                        },
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 40
                        },
                        "flags": 8,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 41
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 41
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "(class B extends async function *f(){} {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
(class B extends async function *f() {} {});
```

### Diagnostics

```javascript
✔ No errors
```

