# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class B {
  static foo() {}
}
class C extends B {
  static {
    this.bar = super.foo;
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
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 24
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
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 27
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 29,
                "end": 35
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 35,
                "end": 37
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
                        "start": 37,
                        "end": 45
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "B",
                        "rawText": "B",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 47
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 45,
                    "end": 47
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 58
                            },
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 69
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 70,
                                                        "end": 73
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 2,
                                                    "start": 60,
                                                    "end": 73
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 73,
                                                    "end": 75
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4259935,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 75,
                                                        "end": 81
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 82,
                                                        "end": 85
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 75,
                                                    "end": 85
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 60,
                                                "end": 85
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 60,
                                            "end": 86
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 60,
                                    "end": 86
                                },
                                "flags": 49,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 90
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 90
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 90
                },
                "flags": 37,
                "transformFlags": 0,
                "start": 32,
                "end": 92
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 29,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "class B {\n  static foo() {}\n}\nclass C extends B {\n  static {\n    this.bar = super.foo;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 75, end: 82

```

