# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: async function *f(){}
## Input

`````js
function *P(){
  class D extends async function *f(){} {}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "P",
                "rawText": "P",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
            },
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
                                "flags": 1,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 32
                                },
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": {
                                        "kind": 82031,
                                        "flags": 64,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 38,
                                        "end": 47
                                    },
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "name": {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "start": 49,
                                        "end": 50
                                    },
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 50,
                                        "end": 52
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 53,
                                            "end": 53
                                        },
                                        "flags": 32,
                                        "start": 52,
                                        "end": 54
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 416,
                                    "start": 32,
                                    "end": 54
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "start": 32,
                                "end": 54
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 32,
                                "start": 56,
                                "end": 57
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 57
                        }
                    ],
                    "multiline": true,
                    "flags": 32,
                    "start": 14,
                    "end": 57
                },
                "flags": 32,
                "start": 13,
                "end": 59
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "function *P(){\n  class D extends async function *f(){} {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
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
