# Kataw parser test case

## Input

`````js
class A extends B {
  x() {
    class C extends D {
      [super[foo]](){}
    }
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
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
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
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
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 25
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 178,
                                                "declareKeyword": null,
                                                "decorators": null,
                                                "classKeyword": {
                                                    "kind": 37822544,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 37
                                                },
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "C",
                                                    "rawText": "C",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 39
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
                                                            "start": 39,
                                                            "end": 47
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "D",
                                                            "rawText": "D",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 49
                                                        },
                                                        "typeParameter": null,
                                                        "flags": 16,
                                                        "transformFlags": 0,
                                                        "start": 47,
                                                        "end": 49
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
                                                                "getKeyword": null,
                                                                "asteriskToken": null,
                                                                "method": {
                                                                    "kind": 209,
                                                                    "name": {
                                                                        "kind": 194,
                                                                        "expression": {
                                                                            "kind": 130,
                                                                            "member": {
                                                                                "kind": 4259935,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 59,
                                                                                "end": 64
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 65,
                                                                                "end": 68
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 4,
                                                                            "start": 59,
                                                                            "end": 69
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 51,
                                                                        "end": 70
                                                                    },
                                                                    "typeParameters": null,
                                                                    "formalParameterList": {
                                                                        "kind": 214,
                                                                        "formalParameters": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "transformFlags": 0,
                                                                        "start": 71,
                                                                        "end": 72
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
                                                                            "start": 73,
                                                                            "end": 73
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 0,
                                                                        "start": 72,
                                                                        "end": 74
                                                                    },
                                                                    "flags": 0,
                                                                    "transformFlags": 0,
                                                                    "start": 70,
                                                                    "end": 74
                                                                },
                                                                "flags": 0,
                                                                "transformFlags": 0,
                                                                "start": 51,
                                                                "end": 74
                                                            }
                                                        ],
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 51,
                                                        "end": 74
                                                    },
                                                    "flags": 39,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 80
                                                },
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 80
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 80
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 84
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 84
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 84
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 84
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 86
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "class A extends B {\n  x() {\n    class C extends D {\n      [super[foo]](){}\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript
class A extends B {
  x() {
    class C extends D {
      [super[foo]]() {}
    }
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

