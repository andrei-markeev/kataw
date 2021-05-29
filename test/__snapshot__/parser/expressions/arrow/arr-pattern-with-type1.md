# Kataw parser test case

## Input

`````js
([x: string]) =>  {};

([[x]: string]) =>  {};

([[x: string]: string]) =>  {};

([{x}: string]) =>  {};
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
                    "start": 13,
                    "end": 16
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 244,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "flags": 0,
                                        "start": 3,
                                        "end": 11
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 2,
                                    "end": 11
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 2,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    }
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
                        "start": 19,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 16,
                    "end": 20
                },
                "flags": 34,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 38,
                    "end": 41
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 244,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 26,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 26,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 28
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 29,
                                            "end": 36
                                        },
                                        "flags": 0,
                                        "start": 28,
                                        "end": 36
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 25,
                                    "end": 36
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 25,
                            "end": 36
                        },
                        "flags": 32,
                        "start": 24,
                        "end": 37
                    }
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
                        "start": 44,
                        "end": 44
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 45
                },
                "flags": 34,
                "start": 21,
                "end": 45
            },
            "flags": 16,
            "start": 21,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 71,
                    "end": 74
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 244,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 244,
                                                    "ellipsisToken": null,
                                                    "binding": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 51,
                                                        "end": 52
                                                    },
                                                    "optionalToken": null,
                                                    "type": {
                                                        "kind": 139,
                                                        "type": {
                                                            "kind": 134234347,
                                                            "flags": 64,
                                                            "start": 53,
                                                            "end": 60
                                                        },
                                                        "flags": 0,
                                                        "start": 52,
                                                        "end": 60
                                                    },
                                                    "initializer": null,
                                                    "flags": 32,
                                                    "start": 51,
                                                    "end": 60
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 51,
                                            "end": 60
                                        },
                                        "flags": 32,
                                        "start": 50,
                                        "end": 61
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 62,
                                            "end": 69
                                        },
                                        "flags": 0,
                                        "start": 61,
                                        "end": 69
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 50,
                                    "end": 69
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 50,
                            "end": 69
                        },
                        "flags": 32,
                        "start": 49,
                        "end": 70
                    }
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
                        "start": 77,
                        "end": 77
                    },
                    "flags": 32,
                    "start": 74,
                    "end": 78
                },
                "flags": 34,
                "start": 46,
                "end": 78
            },
            "flags": 16,
            "start": 46,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 96,
                    "end": 99
                },
                "typeParameters": null,
                "parameters": [
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
                                                    "start": 84,
                                                    "end": 85
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 84,
                                            "end": 85
                                        },
                                        "flags": 48,
                                        "start": 83,
                                        "end": 86
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 64,
                                            "start": 87,
                                            "end": 94
                                        },
                                        "flags": 0,
                                        "start": 86,
                                        "end": 94
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 83,
                                    "end": 94
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 83,
                            "end": 94
                        },
                        "flags": 32,
                        "start": 82,
                        "end": 95
                    }
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
                        "start": 102,
                        "end": 102
                    },
                    "flags": 32,
                    "start": 99,
                    "end": 103
                },
                "flags": 34,
                "start": 79,
                "end": 103
            },
            "flags": 16,
            "start": 79,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "([x: string]) =>  {};\n\n([[x]: string]) =>  {};\n\n([[x: string]: string]) =>  {};\n\n([{x}: string]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

([]) =>  {};
([]) =>  {};
([]) =>  {};
([]) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
