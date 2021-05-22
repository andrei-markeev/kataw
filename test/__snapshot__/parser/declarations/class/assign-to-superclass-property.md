# Kataw parser test case

## Input

`````js
class B extends A {
    constructor() {
        super();
        this.initializer = this.initializer + 1;
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
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "A",
                        "rawText": "A",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
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
                                    "start": 19,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 37
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 225,
                                                        "superKeyword": {
                                                            "kind": 4259935,
                                                            "flags": 1,
                                                            "start": 39,
                                                            "end": 53
                                                        },
                                                        "flags": 96,
                                                        "start": 39,
                                                        "end": 53
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 54,
                                                        "end": 54
                                                    },
                                                    "flags": 268435488,
                                                    "start": 39,
                                                    "end": 55
                                                },
                                                "flags": 16,
                                                "start": 39,
                                                "end": 56
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 135,
                                                            "flags": 96,
                                                            "start": 56,
                                                            "end": 69
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "initializer",
                                                            "rawText": "initializer",
                                                            "flags": 96,
                                                            "start": 70,
                                                            "end": 81
                                                        },
                                                        "flags": 536870944,
                                                        "start": 56,
                                                        "end": 81
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 81,
                                                        "end": 83
                                                    },
                                                    "right": {
                                                        "kind": 198,
                                                        "left": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 135,
                                                                "flags": 96,
                                                                "start": 83,
                                                                "end": 88
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "initializer",
                                                                "rawText": "initializer",
                                                                "flags": 96,
                                                                "start": 89,
                                                                "end": 100
                                                            },
                                                            "flags": 536870944,
                                                            "start": 83,
                                                            "end": 100
                                                        },
                                                        "operatorToken": {
                                                            "kind": 34098,
                                                            "flags": 64,
                                                            "start": 100,
                                                            "end": 102
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "start": 102,
                                                            "end": 104
                                                        },
                                                        "flags": 32,
                                                        "start": 83,
                                                        "end": 104
                                                    },
                                                    "flags": 32,
                                                    "start": 56,
                                                    "end": 104
                                                },
                                                "flags": 16,
                                                "start": 56,
                                                "end": 105
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 39,
                                        "end": 105
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 111
                                },
                                "flags": 0,
                                "start": 35,
                                "end": 111
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 111
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 111
                },
                "flags": 32,
                "start": 7,
                "end": 113
            },
            "flags": 16,
            "start": 0,
            "end": 113
        }
    ],
    "isModule": false,
    "source": "class B extends A {\n    constructor() {\n        super();\n        this.initializer = this.initializer + 1;\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 53, end: 54

```
