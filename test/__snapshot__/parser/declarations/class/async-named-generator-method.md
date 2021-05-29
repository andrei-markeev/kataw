# Kataw parser test case

## Input

`````js
class A {*async() { }};
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
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 10
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 21
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 21
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 21
                },
                "flags": 7,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 22,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class A {*async() { }};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

class A {
  async() {}
}

```

### Diagnostics

```javascript
✔ No errors
```
