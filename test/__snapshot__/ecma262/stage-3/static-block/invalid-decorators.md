# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static foo() {}
  @dec
  static {
    this.bar = this.foo;
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
                "text": "C",
                "rawText": "C",
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
                        },
                        {
                            "kind": 305,
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 31
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "dec",
                                            "rawText": "dec",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 34
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 34
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 34
                            },
                            "declaredKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 43
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
                                                        "start": 45,
                                                        "end": 54
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 55,
                                                        "end": 58
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 2,
                                                    "start": 45,
                                                    "end": 58
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 60,
                                                        "end": 65
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 66,
                                                        "end": 69
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 2,
                                                    "start": 60,
                                                    "end": 69
                                                },
                                                "flags": 0,
                                                "transformFlags": 128,
                                                "start": 45,
                                                "end": 69
                                            },
                                            "flags": 16,
                                            "transformFlags": 4096,
                                            "start": 45,
                                            "end": 70
                                        }
                                    ],
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 70
                                },
                                "flags": 27,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 74
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 74
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 74
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "class C {\n  static foo() {}\n  @dec\n  static {\n    this.bar = this.foo;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'static {}' initialization block may not have decorator - start: 43, end: 45

```

