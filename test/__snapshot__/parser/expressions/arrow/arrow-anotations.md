# Kataw parser test case

## Input

`````js
(x?: string) => {};

([x]: string, a) => {};

([x]: string, a) => {};

([x]: string, a: number) => {};

([x]?: string, a) => {};

([x]?: string, a?) => {};

(...x: string) => {};

(...x?: string) => {};

(...[x]?: string, a?) => {};
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
                    "flags": 0,
                    "start": 12,
                    "end": 15
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
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
                        "start": 0,
                        "end": 11
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
                        "start": 17,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 37,
                    "end": 40
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
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
                                            "start": 23,
                                            "end": 24
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 23,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 25
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 0,
                                "start": 25,
                                "end": 33
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 19,
                            "end": 33
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 34,
                            "end": 36
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
                        "start": 42,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 40,
                    "end": 43
                },
                "flags": 34,
                "start": 19,
                "end": 43
            },
            "flags": 16,
            "start": 19,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 62,
                    "end": 65
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
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
                                            "start": 48,
                                            "end": 49
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 48,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 47,
                                "end": 50
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 51,
                                    "end": 58
                                },
                                "flags": 0,
                                "start": 50,
                                "end": 58
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 44,
                            "end": 58
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 59,
                            "end": 61
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
                        "start": 67,
                        "end": 67
                    },
                    "flags": 32,
                    "start": 65,
                    "end": 68
                },
                "flags": 34,
                "start": 44,
                "end": 68
            },
            "flags": 16,
            "start": 44,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 95,
                    "end": 98
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
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
                                            "start": 73,
                                            "end": 74
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 73,
                                    "end": 74
                                },
                                "flags": 32,
                                "start": 72,
                                "end": 75
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 76,
                                    "end": 83
                                },
                                "flags": 0,
                                "start": 75,
                                "end": 83
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 69,
                            "end": 83
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 84,
                                "end": 86
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234345,
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
                            "start": 69,
                            "end": 94
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
                        "start": 100,
                        "end": 100
                    },
                    "flags": 32,
                    "start": 98,
                    "end": 101
                },
                "flags": 34,
                "start": 69,
                "end": 101
            },
            "flags": 16,
            "start": 69,
            "end": 102
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 121,
                    "end": 124
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
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
                                            "start": 106,
                                            "end": 107
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 106,
                                    "end": 107
                                },
                                "flags": 32,
                                "start": 105,
                                "end": 108
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 108,
                                "end": 109
                            },
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 110,
                                    "end": 117
                                },
                                "flags": 0,
                                "start": 109,
                                "end": 117
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 102,
                            "end": 117
                        },
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 118,
                            "end": 120
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
                        "start": 126,
                        "end": 126
                    },
                    "flags": 32,
                    "start": 124,
                    "end": 127
                },
                "flags": 34,
                "start": 102,
                "end": 127
            },
            "flags": 16,
            "start": 102,
            "end": 128
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 148,
                    "end": 151
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
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
                                            "start": 132,
                                            "end": 133
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 132,
                                    "end": 133
                                },
                                "flags": 32,
                                "start": 131,
                                "end": 134
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 134,
                                "end": 135
                            },
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 136,
                                    "end": 143
                                },
                                "flags": 0,
                                "start": 135,
                                "end": 143
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 128,
                            "end": 143
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 144,
                                "end": 146
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 146,
                                "end": 147
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 128,
                            "end": 147
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
                        "start": 153,
                        "end": 153
                    },
                    "flags": 32,
                    "start": 151,
                    "end": 154
                },
                "flags": 34,
                "start": 128,
                "end": 154
            },
            "flags": 16,
            "start": 128,
            "end": 155
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 171,
                    "end": 174
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 158,
                            "end": 161
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 161,
                            "end": 162
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 163,
                                "end": 170
                            },
                            "flags": 0,
                            "start": 162,
                            "end": 170
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 158,
                        "end": 170
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
                        "start": 176,
                        "end": 176
                    },
                    "flags": 32,
                    "start": 174,
                    "end": 177
                },
                "flags": 32,
                "start": 155,
                "end": 177
            },
            "flags": 16,
            "start": 155,
            "end": 178
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 195,
                    "end": 198
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 64,
                            "start": 181,
                            "end": 184
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 184,
                            "end": 185
                        },
                        "optionalToken": {
                            "kind": 134217750,
                            "flags": 64,
                            "start": 185,
                            "end": 186
                        },
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 187,
                                "end": 194
                            },
                            "flags": 0,
                            "start": 186,
                            "end": 194
                        },
                        "initializer": null,
                        "flags": 34,
                        "start": 181,
                        "end": 194
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
                        "start": 200,
                        "end": 200
                    },
                    "flags": 32,
                    "start": 198,
                    "end": 201
                },
                "flags": 32,
                "start": 178,
                "end": 201
            },
            "flags": 16,
            "start": 178,
            "end": 202
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 225,
                    "end": 228
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 205,
                                "end": 208
                            },
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 202,
                                    "elements": [
                                        {
                                            "kind": 244,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 209,
                                                "end": 210
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 209,
                                            "end": 210
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 209,
                                    "end": 210
                                },
                                "flags": 32,
                                "start": 208,
                                "end": 211
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 211,
                                "end": 212
                            },
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 213,
                                    "end": 220
                                },
                                "flags": 0,
                                "start": 212,
                                "end": 220
                            },
                            "initializer": null,
                            "flags": 34,
                            "start": 205,
                            "end": 220
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": null,
                            "binding": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 221,
                                "end": 223
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 223,
                                "end": 224
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 202,
                            "end": 224
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
                        "start": 230,
                        "end": 230
                    },
                    "flags": 32,
                    "start": 228,
                    "end": 231
                },
                "flags": 32,
                "start": 202,
                "end": 231
            },
            "flags": 16,
            "start": 202,
            "end": 232
        }
    ],
    "isModule": false,
    "source": "(x?: string) => {};\n\n([x]: string, a) => {};\n\n([x]: string, a) => {};\n\n([x]: string, a: number) => {};\n\n([x]?: string, a) => {};\n\n([x]?: string, a?) => {};\n\n(...x: string) => {};\n\n(...x?: string) => {};\n\n(...[x]?: string, a?) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 232
}
```

### Printed

```javascript

(x) =>  {};
() =>  {};
() =>  {};
() =>  {};
() =>  {};
() =>  {};
(...x) =>  {};
(...x?) =>  {};
() =>  {};
```

### Diagnostics

```javascript
✔ No errors
```
