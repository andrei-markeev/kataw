# Kataw parser test case

## Input

`````js
function getSecurity(level) {
    switch(level){
        case 0: // Zero
        case 1: // one
        case 2: // two
            return "Hi";
        case 3: // three
        case 4   : // four
            return "hello";
        case 5: // five
        default:  // default
            return "world";
    }
}
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "getSecurity",
                "rawText": "getSecurity",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "level",
                        "rawText": "level",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 26
            },
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
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "level",
                                "rawText": "level",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 46
                            },
                            "caseBlock": {
                                "kind": 152,
                                "clauses": [
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 48,
                                            "end": 61
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 63,
                                            "end": 64
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 64
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 64,
                                            "end": 85
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 85,
                                            "end": 87
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 87,
                                            "end": 88
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 64,
                                        "end": 88
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 88,
                                            "end": 108
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 110
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 110,
                                            "end": 111
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 111,
                                                    "end": 137
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "Hi",
                                                    "rawText": "\"Hi\"",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 137,
                                                    "end": 142
                                                },
                                                "flags": 17,
                                                "transformFlags": 256,
                                                "start": 111,
                                                "end": 143
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 88,
                                        "end": 143
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 143,
                                            "end": 156
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 156,
                                            "end": 158
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 158,
                                            "end": 159
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 143,
                                        "end": 159
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 159,
                                            "end": 181
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 4,
                                            "rawText": "4",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 181,
                                            "end": 183
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 183,
                                            "end": 187
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 187,
                                                    "end": 214
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "hello",
                                                    "rawText": "\"hello\"",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 214,
                                                    "end": 222
                                                },
                                                "flags": 17,
                                                "transformFlags": 256,
                                                "start": 187,
                                                "end": 223
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 159,
                                        "end": 223
                                    },
                                    {
                                        "kind": 175,
                                        "caseKeyword": {
                                            "kind": 4194382,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 223,
                                            "end": 236
                                        },
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 5,
                                            "rawText": "5",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 236,
                                            "end": 238
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 238,
                                            "end": 239
                                        },
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 223,
                                        "end": 239
                                    },
                                    {
                                        "kind": 170,
                                        "defaultKeyword": {
                                            "kind": 4194387,
                                            "flags": 81,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 263
                                        },
                                        "colonToken": {
                                            "kind": 21,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 263,
                                            "end": 264
                                        },
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 264,
                                                    "end": 295
                                                },
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "world",
                                                    "rawText": "\"world\"",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 295,
                                                    "end": 303
                                                },
                                                "flags": 17,
                                                "transformFlags": 256,
                                                "start": 264,
                                                "end": 304
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 239,
                                        "end": 304
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 304
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 310
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 310
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 27,
                "end": 312
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 312
        }
    ],
    "isModule": false,
    "source": "function getSecurity(level) {\n    switch(level){\n        case 0: // Zero\n        case 1: // one\n        case 2: // two\n            return \"Hi\";\n        case 3: // three\n        case 4   : // four\n            return \"hello\";\n        case 5: // five\n        default:  // default\n            return \"world\";\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 312
}
```

### Printed

```javascript
function getSecurity(level) {
  switch (level) {
    case 0:
       // Zero

    case 1:
       // one

    case 2:// two

      return "\"Hi\"";
    case 3:
       // three

    case 4:// four

      return "\"hello\"";
    case 5:
       // five

    default: // default

      return "\"world\"";
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

