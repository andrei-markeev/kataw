# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: t
> :: test: case default
> :: case: =! class function try while with foo!
## Input

`````js
case =! class function try while with foo! default
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 64,
                    "start": 6,
                    "end": 7
                },
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 7,
                        "end": 13
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [],
                        "flags": 32,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 13
                },
                "flags": 32,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "start": 6,
            "end": 13
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 13,
                "end": 22
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 22,
                "end": 22
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 22,
                "end": 22
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 32,
                "start": 22,
                "end": 22
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 22
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 22,
                "end": 26
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 16,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "start": 26,
                "end": 26
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 16,
                    "start": 32,
                    "end": 32
                },
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 22,
            "end": 32
        },
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 32,
                "end": 37
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 37,
                "end": 41
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 64,
                        "start": 41,
                        "end": 42
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 42
                },
                "flags": 16,
                "start": 41,
                "end": 42
            },
            "flags": 16,
            "start": 32,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "case =! class function try while with foo! default",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ Statement expected - start: 4, end: 6
✖ Binding identifier expected - start: 22, end: 26
✖ Unexpected token. - start: 22, end: 26
✖ Expression expected - start: 42, end: 50
✖ Statement expected - start: 42, end: 50

```
