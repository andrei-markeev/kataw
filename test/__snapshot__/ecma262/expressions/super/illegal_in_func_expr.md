# Kataw parser test case

## Input

`````js
x = function(){ super.foo; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 12
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 13
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
                                        "kind": 129,
                                        "member": {
                                            "kind": 4259935,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 21
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 15,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 15,
                                    "end": 26
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 26
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 28
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 28
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "x = function(){ super.foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 15, end: 22

```

