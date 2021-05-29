# Kataw parser test case

## Input

`````js
([{x}: string], y, z: string) =>  {};
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 29,
                    "end": 32
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 3,
                                                        "end": 4
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 3,
                                                "end": 4
                                            },
                                            "flags": 48,
                                            "start": 2,
                                            "end": 5
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 6,
                                                "end": 13
                                            },
                                            "flags": 0,
                                            "start": 5,
                                            "end": 13
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 13
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 14
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 21,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 20,
                                "end": 28
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 0,
                            "end": 28
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 32,
                    "end": 36
                },
                "flags": 34,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "([{x}: string], y, z: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

() =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
