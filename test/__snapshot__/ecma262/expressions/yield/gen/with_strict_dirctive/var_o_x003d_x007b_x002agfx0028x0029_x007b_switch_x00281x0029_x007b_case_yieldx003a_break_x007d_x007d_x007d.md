# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var o = { *gf() { switch (1) { case yield: break; } } }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 201360950,
                                            "flags": 64,
                                            "transformFlags": 32,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "gf",
                                                "rawText": "gf",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 29
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 160,
                                                            "switchKeyword": {
                                                                "kind": 37757024,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 31,
                                                                "end": 38
                                                            },
                                                            "expression": {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 40,
                                                                "end": 41
                                                            },
                                                            "caseBlock": {
                                                                "kind": 152,
                                                                "clauses": [
                                                                    {
                                                                        "kind": 175,
                                                                        "caseKeyword": {
                                                                            "kind": 4194382,
                                                                            "flags": 80,
                                                                            "transformFlags": 0,
                                                                            "start": 44,
                                                                            "end": 49
                                                                        },
                                                                        "expression": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 64,
                                                                                "transformFlags": 0,
                                                                                "start": 49,
                                                                                "end": 55
                                                                            },
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "flags": 32,
                                                                            "transformFlags": 4096,
                                                                            "start": 49,
                                                                            "end": 55
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "flags": 64,
                                                                            "transformFlags": 0,
                                                                            "start": 55,
                                                                            "end": 56
                                                                        },
                                                                        "statements": [
                                                                            {
                                                                                "kind": 150,
                                                                                "breakKeyword": {
                                                                                    "kind": 37757005,
                                                                                    "flags": 80,
                                                                                    "transformFlags": 0,
                                                                                    "start": 56,
                                                                                    "end": 62
                                                                                },
                                                                                "label": null,
                                                                                "flags": 16,
                                                                                "transformFlags": 0,
                                                                                "start": 56,
                                                                                "end": 63
                                                                            }
                                                                        ],
                                                                        "flags": 16,
                                                                        "transformFlags": 0,
                                                                        "start": 44,
                                                                        "end": 63
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 63
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 31,
                                                            "end": 65
                                                        }
                                                    ],
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 31,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 67
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 67
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 67
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 21,
                            "end": 69
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 69
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "'use strict'; var o = { *gf() { switch (1) { case yield: break; } } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

"'use strict'";
var o = { *gf() {
    switch (1) {
      case yield :
        break;
    }
  } };
```

### Diagnostics

```javascript
✔ No errors
```

