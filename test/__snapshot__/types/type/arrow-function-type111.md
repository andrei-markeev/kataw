# Kataw parser test case

## Input

`````js
type a = ((bj[c]) => T);

type a = ((bj[c])[d]);
`````

## Options


`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 290,
                    "type": {
                        "kind": 288,
                        "typeParameters": null,
                        "arrowTypeParameterList": {
                            "kind": 292,
                            "parameters": [
                                {
                                    "kind": 311,
                                    "objectType": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "bj",
                                            "rawText": "bj",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "indexType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 144,
                                            "typeName": {
                                                "kind": 134299649,
                                                "text": "c",
                                                "rawText": "c",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 17
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 20
                        },
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 20
                        },
                        "returnType": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 22
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 22
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 23
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 64,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "transformFlags": 0,
                "start": 24,
                "end": 30
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 30,
                "end": 32
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "transformFlags": 0,
                "start": 32,
                "end": 34
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 311,
                    "objectType": {
                        "kind": 290,
                        "type": {
                            "kind": 311,
                            "objectType": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "bj",
                                    "rawText": "bj",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 39
                            },
                            "indexType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 41
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 39,
                            "end": 43
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 43
                    },
                    "indexType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 45
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 44,
                            "end": 45
                        },
                        "flags": 2097152,
                        "transformFlags": 0,
                        "start": 44,
                        "end": 45
                    },
                    "flags": 0,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 47
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 34,
                "end": 46
            },
            "flags": 65,
            "transformFlags": 0,
            "start": 24,
            "end": 46
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 47,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "type a = ((bj[c]) => T);\n\ntype a = ((bj[c])[d]);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ')' is not allowed here. Did you mean ';'? - start: 46, end: 47

```

