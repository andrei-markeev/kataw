# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: in do one line
> :: case: async function *f(){}
## Input

`````js
do async function *f(){} while (x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 33
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 0,
                "start": 24,
                "end": 30
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 2,
                        "end": 8
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "generatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 17,
                        "end": 19
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 19,
                        "end": 20
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 20,
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
                            "start": 23,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 22,
                        "end": 24
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 416,
                    "start": 2,
                    "end": 24
                },
                "flags": 16,
                "start": 2,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "do async function *f(){} while (x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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
