# Kataw parser test case

## Input

`````js
x={ foo: function(){ super.foo; }}
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
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 17
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
                                        "start": 18,
                                        "end": 18
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
                                                            "start": 20,
                                                            "end": 26
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 27,
                                                            "end": 30
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 2,
                                                        "start": 20,
                                                        "end": 30
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 4096,
                                                    "start": 20,
                                                    "end": 31
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 33
                                    },
                                    "returnType": null,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 33
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 3,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 33
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 2,
                    "end": 34
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "x={ foo: function(){ super.foo; }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 20, end: 27

```

