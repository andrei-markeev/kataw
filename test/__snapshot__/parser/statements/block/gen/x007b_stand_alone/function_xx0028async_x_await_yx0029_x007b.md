# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { stand alone
> :: case: function x(async x, await y) {
## Input

`````js
{ function x(async x, await y) {
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 176,
                        "declareKeyword": null,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 0,
                            "start": 1,
                            "end": 10
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 10,
                            "end": 12
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 96,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 13,
                                    "end": 18
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 20
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 18,
                                    "end": 20
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 21,
                                    "end": 27
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 27,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 30
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 32,
                                "start": 32,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 32
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 16,
                        "start": 1,
                        "end": 32
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "{ function x(async x, await y) {",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 18, end: 20
✖ ',' expected - start: 27, end: 29

```
