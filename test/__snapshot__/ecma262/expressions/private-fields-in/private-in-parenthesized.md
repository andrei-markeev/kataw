# Kataw parser test case

## Input

`````js
class Foo {
  #x = 1;
  test() {
    (#x) in {};
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 20
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 21
                        },
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
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 30
                                },
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
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 121,
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 38,
                                                            "end": 40
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 41
                                                    },
                                                    "operatorToken": {
                                                        "kind": 21006388,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 41,
                                                        "end": 44
                                                    },
                                                    "right": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 46
                                                        },
                                                        "flags": 48,
                                                        "transformFlags": 8,
                                                        "start": 44,
                                                        "end": 47
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 5120,
                                                    "start": 32,
                                                    "end": 47
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 32,
                                                "end": 48
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 48
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 52
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 52
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 52
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 52
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #x = 1;\n  test() {\n    (#x) in {};\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
class Foo {
  #x = 1;;
  test() {
    (#x) in {};
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

