# Kataw parser test case

## Input

`````js
function foo(x: boolean) {
  var obj = { a: 1, b: 2};
  for (var prop in obj) {
    if (x) {
      continue;
    }
    return;
  }
}

function bar(x: boolean) {
  for (var prop in {}) {
    return;
  }
}

function baz(x: boolean) {
  for (var prop in {}) {
    continue;
  }
}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234254,
                                "flags": 64,
                                "start": 15,
                                "end": 23
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 13,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 24
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 1,
                                "start": 26,
                                "end": 32
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 36
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 40,
                                                            "end": 42
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 45
                                                        },
                                                        "flags": 32,
                                                        "start": 40,
                                                        "end": 45
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "generatorToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "b",
                                                            "rawText": "b",
                                                            "flags": 96,
                                                            "start": 46,
                                                            "end": 48
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 51
                                                        },
                                                        "flags": 32,
                                                        "start": 46,
                                                        "end": 51
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 40,
                                                "end": 51
                                            },
                                            "flags": 48,
                                            "start": 38,
                                            "end": 52
                                        },
                                        "flags": 16,
                                        "start": 32,
                                        "end": 52
                                    }
                                ],
                                "flags": 16,
                                "start": 32,
                                "end": 52
                            },
                            "flags": 16,
                            "start": 26,
                            "end": 53
                        },
                        {
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 53,
                                "end": 59
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 69,
                                "end": 72
                            },
                            "kind": 166,
                            "initializer": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 64,
                                            "end": 69
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 64,
                                        "end": 69
                                    }
                                ],
                                "flags": 16,
                                "start": 64,
                                "end": 69
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "obj",
                                "rawText": "obj",
                                "flags": 96,
                                "start": 72,
                                "end": 76
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 164,
                                            "ifKeyword": {
                                                "kind": 37757019,
                                                "flags": 1,
                                                "start": 79,
                                                "end": 86
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 88,
                                                "end": 89
                                            },
                                            "consequent": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 172,
                                                            "continueKeyword": {
                                                                "kind": 37757009,
                                                                "flags": 1,
                                                                "start": 92,
                                                                "end": 107
                                                            },
                                                            "label": null,
                                                            "flags": 16,
                                                            "start": 92,
                                                            "end": 108
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 92,
                                                    "end": 108
                                                },
                                                "flags": 16,
                                                "start": 90,
                                                "end": 114
                                            },
                                            "elseKeyword": null,
                                            "alternate": null,
                                            "flags": 16,
                                            "start": 79,
                                            "end": 114
                                        },
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 1,
                                                "start": 114,
                                                "end": 125
                                            },
                                            "expression": null,
                                            "flags": 16,
                                            "start": 1,
                                            "end": 114
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 79,
                                    "end": 126
                                },
                                "flags": 16,
                                "start": 77,
                                "end": 130
                            },
                            "flags": 16,
                            "start": 53,
                            "end": 130
                        }
                    ],
                    "flags": 33,
                    "start": 26,
                    "end": 130
                },
                "flags": 32,
                "start": 24,
                "end": 132
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 132
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 132,
                "end": 142
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 142,
                "end": 146
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 147,
                            "end": 148
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234254,
                                "flags": 64,
                                "start": 149,
                                "end": 157
                            },
                            "flags": 0,
                            "start": 148,
                            "end": 157
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 147,
                        "end": 157
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 146,
                "end": 158
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 160,
                                "end": 166
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 176,
                                "end": 179
                            },
                            "kind": 166,
                            "initializer": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 171,
                                            "end": 176
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 171,
                                        "end": 176
                                    }
                                ],
                                "flags": 16,
                                "start": 171,
                                "end": 176
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 181,
                                    "end": 181
                                },
                                "flags": 48,
                                "start": 179,
                                "end": 182
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 1,
                                                "start": 185,
                                                "end": 196
                                            },
                                            "expression": null,
                                            "flags": 16,
                                            "start": 1,
                                            "end": 185
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 185,
                                    "end": 197
                                },
                                "flags": 16,
                                "start": 183,
                                "end": 201
                            },
                            "flags": 16,
                            "start": 160,
                            "end": 201
                        }
                    ],
                    "flags": 33,
                    "start": 160,
                    "end": 201
                },
                "flags": 32,
                "start": 158,
                "end": 203
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 132,
            "end": 203
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 1,
                "start": 203,
                "end": 213
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "baz",
                "rawText": "baz",
                "flags": 96,
                "start": 213,
                "end": 217
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 218,
                            "end": 219
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234254,
                                "flags": 64,
                                "start": 220,
                                "end": 228
                            },
                            "flags": 0,
                            "start": 219,
                            "end": 228
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 218,
                        "end": 228
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 217,
                "end": 229
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 1,
                                "start": 231,
                                "end": 237
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "start": 247,
                                "end": 250
                            },
                            "kind": 166,
                            "initializer": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "prop",
                                            "rawText": "prop",
                                            "flags": 96,
                                            "start": 242,
                                            "end": 247
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 242,
                                        "end": 247
                                    }
                                ],
                                "flags": 16,
                                "start": 242,
                                "end": 247
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 252,
                                    "end": 252
                                },
                                "flags": 48,
                                "start": 250,
                                "end": 253
                            },
                            "statement": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 172,
                                            "continueKeyword": {
                                                "kind": 37757009,
                                                "flags": 1,
                                                "start": 256,
                                                "end": 269
                                            },
                                            "label": null,
                                            "flags": 16,
                                            "start": 256,
                                            "end": 270
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 256,
                                    "end": 270
                                },
                                "flags": 16,
                                "start": 254,
                                "end": 274
                            },
                            "flags": 16,
                            "start": 231,
                            "end": 274
                        }
                    ],
                    "flags": 33,
                    "start": 231,
                    "end": 274
                },
                "flags": 32,
                "start": 229,
                "end": 276
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 203,
            "end": 276
        }
    ],
    "isModule": false,
    "source": "function foo(x: boolean) {\n  var obj = { a: 1, b: 2};\n  for (var prop in obj) {\n    if (x) {\n      continue;\n    }\n    return;\n  }\n}\n\nfunction bar(x: boolean) {\n  for (var prop in {}) {\n    return;\n  }\n}\n\nfunction baz(x: boolean) {\n  for (var prop in {}) {\n    continue;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 276
}
```

### Printed

```javascript

function foo(x) {
  var obj = { a: 1, b: 2 };
  for ( in obj)
    {}
}
function bar(x) {
  for ( in {})
    {}
}
function baz(x) {
  for ( in {})
    {}
}
```

### Diagnostics

```javascript
✔ No errors
```
