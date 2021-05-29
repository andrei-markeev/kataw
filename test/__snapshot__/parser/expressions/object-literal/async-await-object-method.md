# Kataw parser test case

## Input

`````js
({async foo(a) { await a }});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 2,
                                    "end": 7
                                },
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 7,
                                        "end": 11
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 12,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 288,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 208,
                                                        "awaitKeyword": {
                                                            "kind": 82196,
                                                            "flags": 64,
                                                            "start": 16,
                                                            "end": 22
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 22,
                                                            "end": 24
                                                        },
                                                        "flags": 32,
                                                        "start": 16,
                                                        "end": 24
                                                    },
                                                    "flags": 16,
                                                    "start": 16,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 16,
                                            "end": 24
                                        },
                                        "flags": 32,
                                        "start": 14,
                                        "end": 26
                                    },
                                    "flags": 288,
                                    "start": 11,
                                    "end": 26
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 2,
                        "end": 26
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "({async foo(a) { await a }});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

({ async foo(a) {
    await a;
  } });
```

### Diagnostics

```javascript
✔ No errors
```
