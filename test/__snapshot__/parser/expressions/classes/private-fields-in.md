# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
class C {
  #brand;

  #method() {}

  get #getter() {}

  static isC(obj) {
    return #brand in obj && #method in obj && #getter in obj;
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#brand",
                            "flags": 96,
                            "start": 9,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 9,
                        "end": 18
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 18,
                        "end": 19
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67109115,
                                "text": "#method",
                                "flags": 96,
                                "start": 19,
                                "end": 30
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 31,
                                "end": 32
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 0,
                            "start": 30,
                            "end": 35
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 35
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": {
                            "kind": 16498,
                            "flags": 64,
                            "start": 35,
                            "end": 42
                        },
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 67109115,
                                "text": "#getter",
                                "flags": 96,
                                "start": 42,
                                "end": 50
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 1024,
                                "start": 51,
                                "end": 52
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 54,
                                    "end": 54
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 55
                            },
                            "flags": 1024,
                            "start": 50,
                            "end": 55
                        },
                        "flags": 1024,
                        "start": 35,
                        "end": 55
                    },
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": {
                            "kind": 8388716,
                            "flags": 64,
                            "start": 55,
                            "end": 65
                        },
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "isC",
                                "rawText": "isC",
                                "flags": 96,
                                "start": 65,
                                "end": 69
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "obj",
                                            "rawText": "obj",
                                            "flags": 96,
                                            "start": 70,
                                            "end": 73
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 70,
                                        "end": 73
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 70,
                                "end": 74
                            },
                            "type": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 1,
                                                "start": 76,
                                                "end": 87
                                            },
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 67109115,
                                                            "text": "#brand",
                                                            "flags": 96,
                                                            "start": 87,
                                                            "end": 94
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 64,
                                                            "start": 94,
                                                            "end": 97
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "start": 97,
                                                            "end": 101
                                                        },
                                                        "flags": 32,
                                                        "start": 87,
                                                        "end": 101
                                                    },
                                                    "operatorToken": {
                                                        "kind": 33594,
                                                        "flags": 64,
                                                        "start": 101,
                                                        "end": 104
                                                    },
                                                    "right": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 67109115,
                                                            "text": "#method",
                                                            "flags": 96,
                                                            "start": 104,
                                                            "end": 112
                                                        },
                                                        "operatorToken": {
                                                            "kind": 21006388,
                                                            "flags": 64,
                                                            "start": 112,
                                                            "end": 115
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "obj",
                                                            "rawText": "obj",
                                                            "flags": 96,
                                                            "start": 115,
                                                            "end": 119
                                                        },
                                                        "flags": 32,
                                                        "start": 112,
                                                        "end": 119
                                                    },
                                                    "flags": 32,
                                                    "start": 87,
                                                    "end": 119
                                                },
                                                "operatorToken": {
                                                    "kind": 33594,
                                                    "flags": 64,
                                                    "start": 119,
                                                    "end": 122
                                                },
                                                "right": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 67109115,
                                                        "text": "#getter",
                                                        "flags": 96,
                                                        "start": 122,
                                                        "end": 130
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 64,
                                                        "start": 130,
                                                        "end": 133
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "obj",
                                                        "rawText": "obj",
                                                        "flags": 96,
                                                        "start": 133,
                                                        "end": 137
                                                    },
                                                    "flags": 32,
                                                    "start": 130,
                                                    "end": 137
                                                },
                                                "flags": 32,
                                                "start": 87,
                                                "end": 137
                                            },
                                            "flags": 16,
                                            "start": 1,
                                            "end": 76
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32,
                                    "start": 76,
                                    "end": 138
                                },
                                "flags": 32,
                                "start": 74,
                                "end": 142
                            },
                            "flags": 0,
                            "start": 69,
                            "end": 142
                        },
                        "flags": 0,
                        "start": 65,
                        "end": 142
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 144
            },
            "flags": 16,
            "start": 0,
            "end": 144
        }
    ],
    "isModule": true,
    "text": "class C {\n  #brand;\n\n  #method() {}\n\n  get #getter() {}\n\n  static isC(obj) {\n    return #brand in obj && #method in obj && #getter in obj;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 144
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
