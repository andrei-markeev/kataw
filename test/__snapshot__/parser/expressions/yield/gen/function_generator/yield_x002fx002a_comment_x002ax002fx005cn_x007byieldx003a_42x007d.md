# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
function * gen() { function not_gen() { yield /* comment */\n {yield: 42} }}
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
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 96,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 45
                                            },
                                            "flags": 16,
                                            "start": 39,
                                            "end": 45
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 39,
                                    "end": 45
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 45
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 18,
                            "end": 45
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 18,
                    "end": 45
                },
                "flags": 32,
                "start": 16,
                "end": 45
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 60,
                "end": 61
            },
            "flags": 16,
            "start": 60,
            "end": 61
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 63,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 63,
                        "end": 68
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 63,
                "end": 68
            },
            "flags": 16,
            "start": 61,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 42,
                "rawText": "42",
                "flags": 96,
                "start": 69,
                "end": 72
            },
            "flags": 16,
            "start": 69,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { yield /* comment */\\n {yield: 42} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 45, end: 59
✖ Statement expected - start: 45, end: 60
✖ Statement expected - start: 68, end: 69
✖ Statement expected - start: 72, end: 73
✖ Statement expected - start: 73, end: 75
✖ Statement expected - start: 75, end: 76

```
