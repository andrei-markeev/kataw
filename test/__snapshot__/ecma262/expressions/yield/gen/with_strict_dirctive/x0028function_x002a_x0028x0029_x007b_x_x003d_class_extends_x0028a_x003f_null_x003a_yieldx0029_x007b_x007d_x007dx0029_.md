# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Options

`````js
{}
`````
## Input

`````js
'use strict'; (function * () { x = class extends (a ? null : yield) { } });
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 23
                    },
                    "asteriskToken": {
                        "kind": 201360950,
                        "flags": 64,
                        "transformFlags": 32,
                        "start": 23,
                        "end": 25
                    },
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 27
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
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 34,
                                                "end": 40
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
                                                        "start": 40,
                                                        "end": 48
                                                    },
                                                    "expression": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 197,
                                                            "shortCircuit": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 50,
                                                                "end": 51
                                                            },
                                                            "questionToken": {
                                                                "kind": 134217750,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 51,
                                                                "end": 53
                                                            },
                                                            "consequent": {
                                                                "kind": 138477575,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 53,
                                                                "end": 58
                                                            },
                                                            "colonToken": {
                                                                "kind": 21,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 58,
                                                                "end": 60
                                                            },
                                                            "alternate": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 60,
                                                                    "end": 66
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "transformFlags": 4096,
                                                                "start": 60,
                                                                "end": 66
                                                            },
                                                            "flags": 96,
                                                            "transformFlags": 4096,
                                                            "start": 48,
                                                            "end": 66
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 48,
                                                        "end": 67
                                                    },
                                                    "typeParameter": null,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 67
                                                },
                                                "body": {
                                                    "kind": 303,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 69,
                                                    "end": 69
                                                },
                                                "flags": 40,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 71
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 71
                                        },
                                        "flags": 0,
                                        "transformFlags": 128,
                                        "start": 30,
                                        "end": 71
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 30,
                                    "end": 71
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 71
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 73
                    },
                    "returnType": null,
                    "flags": 288,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 73
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 74
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "'use strict'; (function * () { x = class extends (a ? null : yield) { } });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

"'use strict'";
(function *() {
    x = class extends (a ? null : yield ) {};
  });
```

### Diagnostics

```javascript
✔ No errors
```

