# Kataw parser test case

## Input

`````js
class A {async
  foo() { }};
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
                "text": "A",
                "rawText": "A",
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
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 9,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 9,
                            "end": 14
                        },
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 20
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 22
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 26
                                },
                                "flags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 26
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 26
                },
                "flags": 7,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 27,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "class A {async\n  foo() { }};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

class A {
  async;
  foo() {}
}

```

### Diagnostics

```javascript
✔ No errors
```
