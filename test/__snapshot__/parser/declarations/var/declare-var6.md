# Kataw parser test case

## Input

`````js
declare var x: Foo;
declare var mixed: mixed;
declare var any: any;
declare var empty: empty;
declare var maybe: ?Foo;
declare var union: Foo | null | void;
`````

## Options

### Parser Options

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
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 18
            },
            "flags": 4112,
            "start": 7,
            "end": 19
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 19,
                "end": 27
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 27,
                "end": 31
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "mixed",
                            "rawText": "mixed",
                            "flags": 96,
                            "start": 31,
                            "end": 37
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 44
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 38,
                                "end": 44
                            },
                            "flags": 0,
                            "start": 37,
                            "end": 44
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 31,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 31,
                "end": 44
            },
            "flags": 4112,
            "start": 27,
            "end": 45
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 45,
                "end": 53
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 53,
                "end": 57
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "any",
                            "rawText": "any",
                            "flags": 96,
                            "start": 57,
                            "end": 61
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 62,
                                "end": 66
                            },
                            "flags": 0,
                            "start": 61,
                            "end": 66
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 57,
                        "end": 66
                    }
                ],
                "flags": 16,
                "start": 57,
                "end": 66
            },
            "flags": 4112,
            "start": 53,
            "end": 67
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 67,
                "end": 75
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 75,
                "end": 79
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "empty",
                            "rawText": "empty",
                            "flags": 96,
                            "start": 79,
                            "end": 85
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "empty",
                                    "rawText": "empty",
                                    "flags": 96,
                                    "start": 86,
                                    "end": 92
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 86,
                                "end": 92
                            },
                            "flags": 0,
                            "start": 85,
                            "end": 92
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 79,
                        "end": 92
                    }
                ],
                "flags": 16,
                "start": 79,
                "end": 92
            },
            "flags": 4112,
            "start": 75,
            "end": 93
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 93,
                "end": 101
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 101,
                "end": 105
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "maybe",
                            "rawText": "maybe",
                            "flags": 96,
                            "start": 105,
                            "end": 111
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 112,
                                    "end": 114
                                },
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Foo",
                                        "rawText": "Foo",
                                        "flags": 96,
                                        "start": 114,
                                        "end": 117
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 114,
                                    "end": 117
                                },
                                "flags": 0,
                                "start": 112,
                                "end": 117
                            },
                            "flags": 0,
                            "start": 111,
                            "end": 117
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 105,
                        "end": 117
                    }
                ],
                "flags": 16,
                "start": 105,
                "end": 117
            },
            "flags": 4112,
            "start": 101,
            "end": 118
        },
        {
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 118,
                "end": 126
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 126,
                "end": 130
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "union",
                            "rawText": "union",
                            "flags": 96,
                            "start": 130,
                            "end": 136
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "Foo",
                                            "rawText": "Foo",
                                            "flags": 96,
                                            "start": 137,
                                            "end": 141
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 137,
                                        "end": 141
                                    },
                                    {
                                        "kind": 138477575,
                                        "flags": 64,
                                        "start": 143,
                                        "end": 148
                                    },
                                    {
                                        "kind": 138477615,
                                        "flags": 64,
                                        "start": 150,
                                        "end": 155
                                    }
                                ],
                                "flags": 0,
                                "start": 141,
                                "end": 155
                            },
                            "flags": 0,
                            "start": 136,
                            "end": 155
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 130,
                        "end": 155
                    }
                ],
                "flags": 16,
                "start": 130,
                "end": 155
            },
            "flags": 4112,
            "start": 126,
            "end": 156
        }
    ],
    "isModule": false,
    "source": "declare var x: Foo;\ndeclare var mixed: mixed;\ndeclare var any: any;\ndeclare var empty: empty;\ndeclare var maybe: ?Foo;\ndeclare var union: Foo | null | void;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 156
}
```

### Printed

```javascript

var x;
var mixed;
var any;
var empty;
var maybe;
var union;
```

### Diagnostics

```javascript
✔ No errors
```
