# Kataw parser test case

## Input

`````js
async function f(){   function fh([+ await x]) { }   }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
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
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 30
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "fh",
                                "rawText": "fh",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 324,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 35
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 34,
                                        "end": 35
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 35
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 35
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "operand": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 36,
                                        "end": 42
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "transformFlags": 4096,
                                    "start": 36,
                                    "end": 44
                                },
                                "flags": 32,
                                "transformFlags": 16384,
                                "start": 35,
                                "end": 44
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 44
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 48,
                "end": 48
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 46,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function f(){   function fh([+ await x]) { }   }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 35, end: 36
✖ ']' is not allowed here. Did you mean ';'? - start: 44, end: 45
✖ Declaration or statement expected - start: 45, end: 46
✖ Declaration or statement expected - start: 50, end: 54

```

