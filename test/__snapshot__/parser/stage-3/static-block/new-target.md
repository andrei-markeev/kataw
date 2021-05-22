# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class Base {
  constructor() {
    this.Foo = class {
      static #_ = (() => {
        this.foo = new.target;
      })();
    };
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
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 5,
                "end": 10
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "start": 27,
                                    "end": 28
                                },
                                "type": null,
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
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 135,
                                                            "flags": 96,
                                                            "start": 30,
                                                            "end": 39
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "Foo",
                                                            "rawText": "Foo",
                                                            "flags": 96,
                                                            "start": 40,
                                                            "end": 43
                                                        },
                                                        "flags": 536870944,
                                                        "start": 30,
                                                        "end": 43
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 43,
                                                        "end": 45
                                                    },
                                                    "right": {
                                                        "kind": 189,
                                                        "decorators": null,
                                                        "classKeyword": {
                                                            "kind": 37822544,
                                                            "flags": 0,
                                                            "start": 45,
                                                            "end": 51
                                                        },
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "tail": {
                                                            "kind": 277,
                                                            "classHeritage": null,
                                                            "body": {
                                                                "kind": 262,
                                                                "elements": [
                                                                    {
                                                                        "kind": 280,
                                                                        "decorators": null,
                                                                        "declaredToken": null,
                                                                        "staticToken": {
                                                                            "kind": 8388716,
                                                                            "flags": 64,
                                                                            "start": 53,
                                                                            "end": 66
                                                                        },
                                                                        "asyncKeyword": null,
                                                                        "key": {
                                                                            "kind": 67174651,
                                                                            "text": "#_",
                                                                            "flags": 96,
                                                                            "start": 66,
                                                                            "end": 69
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 131,
                                                                            "expression": {
                                                                                "kind": 121,
                                                                                "expression": {
                                                                                    "kind": 271,
                                                                                    "arrowToken": {
                                                                                        "kind": 10,
                                                                                        "flags": 0,
                                                                                        "start": 75,
                                                                                        "end": 78
                                                                                    },
                                                                                    "typeParameters": null,
                                                                                    "parameters": [],
                                                                                    "asyncKeyword": null,
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
                                                                                                        "kind": 125,
                                                                                                        "left": {
                                                                                                            "kind": 129,
                                                                                                            "member": {
                                                                                                                "kind": 135,
                                                                                                                "flags": 96,
                                                                                                                "start": 80,
                                                                                                                "end": 93
                                                                                                            },
                                                                                                            "expression": {
                                                                                                                "kind": 134299649,
                                                                                                                "text": "foo",
                                                                                                                "rawText": "foo",
                                                                                                                "flags": 96,
                                                                                                                "start": 94,
                                                                                                                "end": 97
                                                                                                            },
                                                                                                            "flags": 536870944,
                                                                                                            "start": 80,
                                                                                                            "end": 97
                                                                                                        },
                                                                                                        "operatorToken": {
                                                                                                            "kind": 4125,
                                                                                                            "flags": 64,
                                                                                                            "start": 97,
                                                                                                            "end": 99
                                                                                                        },
                                                                                                        "right": {
                                                                                                            "kind": 211,
                                                                                                            "newKeyword": {
                                                                                                                "kind": 138477661,
                                                                                                                "flags": 0,
                                                                                                                "start": 99,
                                                                                                                "end": 103
                                                                                                            },
                                                                                                            "targetIdentifier": {
                                                                                                                "kind": 16594,
                                                                                                                "flags": 0,
                                                                                                                "start": 104,
                                                                                                                "end": 110
                                                                                                            },
                                                                                                            "flags": 96,
                                                                                                            "start": 99,
                                                                                                            "end": 110
                                                                                                        },
                                                                                                        "flags": 32,
                                                                                                        "start": 80,
                                                                                                        "end": 110
                                                                                                    },
                                                                                                    "flags": 16,
                                                                                                    "start": 80,
                                                                                                    "end": 111
                                                                                                }
                                                                                            ],
                                                                                            "flags": 33,
                                                                                            "start": 80,
                                                                                            "end": 111
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 78,
                                                                                        "end": 119
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 73,
                                                                                    "end": 119
                                                                                },
                                                                                "flags": 32,
                                                                                "start": 71,
                                                                                "end": 120
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 121,
                                                                                "end": 121
                                                                            },
                                                                            "flags": 268435488,
                                                                            "start": 71,
                                                                            "end": 122
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 66,
                                                                        "end": 122
                                                                    },
                                                                    {
                                                                        "kind": 281,
                                                                        "flags": 96,
                                                                        "start": 122,
                                                                        "end": 123
                                                                    }
                                                                ],
                                                                "flags": 32,
                                                                "start": 53,
                                                                "end": 123
                                                            },
                                                            "flags": 32,
                                                            "start": 51,
                                                            "end": 129
                                                        },
                                                        "flags": 32,
                                                        "start": 45,
                                                        "end": 129
                                                    },
                                                    "flags": 32,
                                                    "start": 30,
                                                    "end": 129
                                                },
                                                "flags": 16,
                                                "start": 30,
                                                "end": 130
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 30,
                                        "end": 130
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 134
                                },
                                "flags": 2048,
                                "start": 26,
                                "end": 134
                            },
                            "flags": 2048,
                            "start": 12,
                            "end": 134
                        }
                    ],
                    "flags": 32,
                    "start": 12,
                    "end": 134
                },
                "flags": 32,
                "start": 10,
                "end": 137
            },
            "flags": 16,
            "start": 0,
            "end": 137
        }
    ],
    "isModule": false,
    "source": "class Base {\n  constructor() {\n    this.Foo = class {\n      static #_ = (() => {\n        this.foo = new.target;\n      })();\n    };\n  }\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 137
}
```

### Printed

```javascript

class Base {
  constructor() {
    this.Foo = class  {
      static #_ = (() =>  {
            this.foo = ;
          })();

    };
  }
}
```

### Diagnostics

```javascript
✔ No errors
```
