# Kataw parser test case

## Input

`````js
declare var x3: ?(() => (() => number));
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
                            "text": "x3",
                            "rawText": "x3",
                            "flags": 96,
                            "start": 11,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 17
                                },
                                "type": {
                                    "kind": 260,
                                    "type": {
                                        "kind": 261,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "parameters": [
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "flags": 64,
                                                    "start": 19,
                                                    "end": 19
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 19
                                            }
                                        ],
                                        "returnType": {
                                            "kind": 260,
                                            "type": {
                                                "kind": 261,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 64,
                                                    "start": 27,
                                                    "end": 30
                                                },
                                                "parameters": [
                                                    {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "flags": 64,
                                                            "start": 26,
                                                            "end": 26
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 26,
                                                        "end": 26
                                                    }
                                                ],
                                                "returnType": {
                                                    "kind": 134234345,
                                                    "flags": 64,
                                                    "start": 30,
                                                    "end": 37
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 23,
                                                "end": 37
                                            },
                                            "flags": 0,
                                            "start": 23,
                                            "end": 38
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 17,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "start": 17,
                                    "end": 39
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 39
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 39
            },
            "flags": 4112,
            "start": 7,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "declare var x3: ?(() => (() => number));",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 19, end: 20
✖ Type expected - start: 26, end: 27

```
