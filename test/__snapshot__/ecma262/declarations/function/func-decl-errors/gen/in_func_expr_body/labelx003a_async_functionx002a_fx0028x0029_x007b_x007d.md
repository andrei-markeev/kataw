# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/func-decl-errors/gen/in_func_expr_body
> :: test: in func expr body
> :: case: label: async function* f() { }
## Options

`````js
{}
`````
## Input

`````js
(function() {label: async function* f() { }})()
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
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 9
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 163,
                                        "label": {
                                            "kind": 134299649,
                                            "text": "label",
                                            "rawText": "label",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 18
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "statement": {
                                            "kind": 176,
                                            "declareKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 25
                                            },
                                            "functionKeyword": {
                                                "kind": 37822554,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "asteriskToken": {
                                                "kind": 201360950,
                                                "flags": 64,
                                                "transformFlags": 32,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "f",
                                                "rawText": "f",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 38
                                            },
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 41,
                                                    "end": 41
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 39,
                                                "end": 43
                                            },
                                            "returnType": null,
                                            "flags": 400,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 43
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 43
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 43
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 44
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 44
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 45
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "(function() {label: async function* f() { }})()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations cannot be used in a single-statement context - start: 19, end: 25

```

