# Kataw parser test case

## Input

`````js
class C { static set #aaa(x){} }
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 16
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 16,
                                "end": 20
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67174651,
                                    "text": "#aaa",
                                    "flags": 96,
                                    "start": 20,
                                    "end": 25
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
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 27
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 26,
                                            "end": 27
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 544,
                                    "start": 26,
                                    "end": 28
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 512,
                                "start": 25,
                                "end": 30
                            },
                            "flags": 512,
                            "start": 16,
                            "end": 30
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 30
                },
                "flags": 7,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "class C { static set #aaa(x){} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

class C {
  static set static #aaa(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```
