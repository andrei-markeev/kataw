# Kataw parser test case

## Input

`````js
"use strict"; (a = yield) => {};
"use strict"; (a = yield /a/g) => {};
"use strict"; yield => {};
"use strict"; (yield) => {};
"use strict"; (yield = 0) => {};
"use strict"; ([yield]) => {};
"use strict"; ([yield = 0]) => {};
"use strict"; ([...yield]) => {};
"use strict"; ({a: yield}) => {};
"use strict"; ({yield}) => {};
"use strict"; ({yield = 0}) => {};
"use strict"; () => yield;
"use strict"; () => yield /a/g;
"use strict"; () => { var x = yield; };
"use strict"; () => { var x = yield /a/g; };
"use strict"; () => { var yield; };
"use strict"; () => { var yield = 0; };
"use strict"; () => { var [yield] = []; };
"use strict"; () => { var [yield = 0] = []; };
"use strict"; () => { var [...yield] = []; };
"use strict"; () => { var {a: yield} = {}; };
"use strict"; () => { var {yield} = {}; };
"use strict"; () => { var {yield = 0} = {}; };
"use strict"; () => { let yield; };
"use strict"; () => { let yield = 0; };
"use strict"; () => { let [yield] = []; };
"use strict"; () => { let [yield = 0] = []; };
"use strict"; () => { let [...yield] = []; };
"use strict"; () => { let {a: yield} = {}; };
"use strict"; () => { let {yield} = {}; };
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 24
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 13,
                            "end": 24
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 25
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 28
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 30
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 31
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 13,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 32,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 32,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 48,
                                "end": 49
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 57
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "transformFlags": 32,
                                        "start": 57,
                                        "end": 59
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 59,
                                        "end": 60
                                    },
                                    "flags": 32,
                                    "transformFlags": 5120,
                                    "start": 51,
                                    "end": 60
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 60,
                                    "end": 61
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "g",
                                    "rawText": "g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 62
                                },
                                "flags": 32,
                                "transformFlags": 5120,
                                "start": 51,
                                "end": 62
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 46,
                            "end": 62
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 63
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 63,
                    "end": 66
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 68
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 69
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 46,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 46,
            "end": 70
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 70,
                "end": 83
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 70,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 84,
                    "end": 90
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 90,
                    "end": 93
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 95
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 96
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 84,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 84,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 97,
                "end": 110
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 97,
            "end": 111
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 113,
                            "end": 118
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 113,
                    "end": 119
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 119,
                    "end": 122
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 124,
                        "end": 124
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 125
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 111,
                "end": 125
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 111,
            "end": 126
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 126,
                "end": 139
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 126,
            "end": 140
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 142,
                                "end": 147
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 149,
                                "end": 151
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 140,
                            "end": 151
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 142,
                    "end": 152
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 152,
                    "end": 155
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 157,
                        "end": 157
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 155,
                    "end": 158
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 140,
                "end": 158
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 140,
            "end": 159
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 159,
                "end": 172
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 159,
            "end": 173
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 176,
                                        "end": 181
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 176,
                                "end": 181
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 175,
                            "end": 182
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 175,
                    "end": 183
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 183,
                    "end": 186
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 188,
                        "end": 188
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 189
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 173,
                "end": 189
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 173,
            "end": 190
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 190,
                "end": 203
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 190,
            "end": 204
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 207,
                                            "end": 212
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 214,
                                            "end": 216
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 207,
                                        "end": 216
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 207,
                                "end": 216
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 206,
                            "end": 217
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 206,
                    "end": 218
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 218,
                    "end": 221
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 223,
                        "end": 223
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 221,
                    "end": 224
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 204,
                "end": 224
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 204,
            "end": 225
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 225,
                "end": 238
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 225,
            "end": 239
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 242,
                                            "end": 245
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 245,
                                            "end": 250
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 1073741856,
                                        "transformFlags": 4096,
                                        "start": 242,
                                        "end": 250
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 242,
                                "end": 250
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 241,
                            "end": 251
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 241,
                    "end": 252
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 252,
                    "end": 255
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 257,
                        "end": 257
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 255,
                    "end": 258
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 239,
                "end": 258
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 239,
            "end": 259
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 259,
                "end": 272
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 259,
            "end": 273
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 276,
                                            "end": 277
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 278,
                                            "end": 284
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 276,
                                        "end": 284
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 276,
                                "end": 284
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 275,
                            "end": 285
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 275,
                    "end": 286
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 286,
                    "end": 289
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 291,
                        "end": 291
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 289,
                    "end": 292
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 273,
                "end": 292
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 273,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 293,
                "end": 306
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 293,
            "end": 307
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 310,
                                        "end": 315
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 310,
                                "end": 315
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 309,
                            "end": 316
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 309,
                    "end": 317
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 317,
                    "end": 320
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 322,
                        "end": 322
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 323
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 307,
                "end": 323
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 307,
            "end": 324
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 324,
                "end": 337
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 324,
            "end": 338
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 341,
                                            "end": 346
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 348,
                                            "end": 350
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 341,
                                        "end": 350
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 341,
                                "end": 350
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 340,
                            "end": 351
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 340,
                    "end": 352
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 352,
                    "end": 355
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 357,
                        "end": 357
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 355,
                    "end": 358
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 338,
                "end": 358
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 338,
            "end": 359
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 359,
                "end": 372
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 359,
            "end": 373
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 375,
                    "end": 375
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 376,
                    "end": 379
                },
                "contents": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 379,
                    "end": 385
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 373,
                "end": 385
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 373,
            "end": 386
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 386,
                "end": 399
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 386,
            "end": 400
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 402,
                    "end": 402
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 403,
                    "end": 406
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 412
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 412,
                            "end": 414
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 414,
                            "end": 415
                        },
                        "flags": 32,
                        "transformFlags": 5120,
                        "start": 406,
                        "end": 415
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 415,
                        "end": 416
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "g",
                        "rawText": "g",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 416,
                        "end": 417
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 406,
                    "end": 417
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 400,
                "end": 417
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 400,
            "end": 418
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 418,
                "end": 431
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 418,
            "end": 432
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 434,
                    "end": 434
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 435,
                    "end": 438
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 440,
                                    "end": 444
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
                                                "transformFlags": 0,
                                                "start": 444,
                                                "end": 446
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 448,
                                                "end": 454
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 444,
                                            "end": 454
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 444,
                                    "end": 454
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 440,
                                "end": 455
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 440,
                        "end": 455
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 438,
                    "end": 457
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 432,
                "end": 457
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 432,
            "end": 458
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 458,
                "end": 471
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 458,
            "end": 472
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 474,
                    "end": 474
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 475,
                    "end": 478
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 480,
                                    "end": 484
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
                                                "transformFlags": 0,
                                                "start": 484,
                                                "end": 486
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "yield",
                                                        "rawText": "yield",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 488,
                                                        "end": 494
                                                    },
                                                    "operatorToken": {
                                                        "kind": 35640,
                                                        "flags": 96,
                                                        "transformFlags": 32,
                                                        "start": 494,
                                                        "end": 496
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 496,
                                                        "end": 497
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 5120,
                                                    "start": 488,
                                                    "end": 497
                                                },
                                                "operatorToken": {
                                                    "kind": 35640,
                                                    "flags": 96,
                                                    "transformFlags": 32,
                                                    "start": 497,
                                                    "end": 498
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 498,
                                                    "end": 499
                                                },
                                                "flags": 32,
                                                "transformFlags": 5120,
                                                "start": 488,
                                                "end": 499
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 484,
                                            "end": 499
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 484,
                                    "end": 499
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 480,
                                "end": 500
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 480,
                        "end": 500
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 478,
                    "end": 502
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 472,
                "end": 502
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 472,
            "end": 503
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 503,
                "end": 516
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 503,
            "end": 517
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 519,
                    "end": 519
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 520,
                    "end": 523
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 525,
                                    "end": 529
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 529,
                                                "end": 535
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 529,
                                            "end": 535
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 529,
                                    "end": 535
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 525,
                                "end": 536
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 525,
                        "end": 536
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 523,
                    "end": 538
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 517,
                "end": 538
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 517,
            "end": 539
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 539,
                "end": 552
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 539,
            "end": 553
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 555,
                    "end": 555
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 556,
                    "end": 559
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 561,
                                    "end": 565
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 565,
                                                "end": 571
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 573,
                                                "end": 575
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 565,
                                            "end": 575
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 565,
                                    "end": 575
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 561,
                                "end": 576
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 561,
                        "end": 576
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 559,
                    "end": 578
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 553,
                "end": 578
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 553,
            "end": 579
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 579,
                "end": 592
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 579,
            "end": 593
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 595,
                    "end": 595
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 596,
                    "end": 599
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 601,
                                    "end": 605
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 607,
                                                            "end": 612
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 607,
                                                    "end": 612
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 605,
                                                "end": 613
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 617,
                                                    "end": 617
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 615,
                                                "end": 618
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 605,
                                            "end": 618
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 605,
                                    "end": 618
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 601,
                                "end": 619
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 601,
                        "end": 619
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 599,
                    "end": 621
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 593,
                "end": 621
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 593,
            "end": 622
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 622,
                "end": 635
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 622,
            "end": 636
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 638,
                    "end": 638
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 639,
                    "end": 642
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 644,
                                    "end": 648
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 650,
                                                                "end": 655
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 657,
                                                                "end": 659
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 650,
                                                            "end": 659
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 650,
                                                    "end": 659
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 648,
                                                "end": 660
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 664,
                                                    "end": 664
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 662,
                                                "end": 665
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 648,
                                            "end": 665
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 648,
                                    "end": 665
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 644,
                                "end": 666
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 644,
                        "end": 666
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 642,
                    "end": 668
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 636,
                "end": 668
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 636,
            "end": 669
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 669,
                "end": 682
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 669,
            "end": 683
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 685,
                    "end": 685
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 686,
                    "end": 689
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 691,
                                    "end": 695
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 697,
                                                                "end": 700
                                                            },
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 700,
                                                                "end": 705
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": null,
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 697,
                                                            "end": 705
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 697,
                                                    "end": 705
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 695,
                                                "end": 706
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 710,
                                                    "end": 710
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 708,
                                                "end": 711
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 695,
                                            "end": 711
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 695,
                                    "end": 711
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 691,
                                "end": 712
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 691,
                        "end": 712
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 689,
                    "end": 714
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 683,
                "end": 714
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 683,
            "end": 715
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 715,
                "end": 728
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 715,
            "end": 729
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 731,
                    "end": 731
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 732,
                    "end": 735
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 737,
                                    "end": 741
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 743,
                                                                "end": 744
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 745,
                                                                "end": 751
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 743,
                                                            "end": 751
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 743,
                                                    "end": 751
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 741,
                                                "end": 752
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 756,
                                                    "end": 756
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 754,
                                                "end": 757
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 741,
                                            "end": 757
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 741,
                                    "end": 757
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 737,
                                "end": 758
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 737,
                        "end": 758
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 735,
                    "end": 760
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 729,
                "end": 760
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 729,
            "end": 761
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 761,
                "end": 774
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 761,
            "end": 775
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 777,
                    "end": 777
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 778,
                    "end": 781
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 783,
                                    "end": 787
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 789,
                                                            "end": 794
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 789,
                                                    "end": 794
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 787,
                                                "end": 795
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 799,
                                                    "end": 799
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 797,
                                                "end": 800
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 787,
                                            "end": 800
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 787,
                                    "end": 800
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 783,
                                "end": 801
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 783,
                        "end": 801
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 781,
                    "end": 803
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 775,
                "end": 803
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 775,
            "end": 804
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 804,
                "end": 817
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 804,
            "end": 818
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 820,
                    "end": 820
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 821,
                    "end": 824
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 155,
                                "declareKeyword": null,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 826,
                                    "end": 830
                                },
                                "declarationList": {
                                    "kind": 156,
                                    "declarations": [
                                        {
                                            "kind": 157,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 832,
                                                                "end": 837
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 839,
                                                                "end": 841
                                                            },
                                                            "flags": 0,
                                                            "transformFlags": 4096,
                                                            "start": 832,
                                                            "end": 841
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 832,
                                                    "end": 841
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 830,
                                                "end": 842
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 846,
                                                    "end": 846
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 844,
                                                "end": 847
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 830,
                                            "end": 847
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 830,
                                    "end": 847
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 826,
                                "end": 848
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 826,
                        "end": 848
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 824,
                    "end": 850
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 818,
                "end": 850
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 818,
            "end": 851
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 851,
                "end": 864
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 851,
            "end": 865
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 867,
                    "end": 867
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 868,
                    "end": 871
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 873,
                                    "end": 877
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 877,
                                                "end": 883
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 877,
                                            "end": 883
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 877,
                                    "end": 883
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 873,
                                "end": 884
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 873,
                        "end": 884
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 871,
                    "end": 886
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 865,
                "end": 886
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 865,
            "end": 887
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 887,
                "end": 900
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 887,
            "end": 901
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 903,
                    "end": 903
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 904,
                    "end": 907
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 909,
                                    "end": 913
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "yield",
                                                "rawText": "yield",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 913,
                                                "end": 919
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 921,
                                                "end": 923
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 913,
                                            "end": 923
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 913,
                                    "end": 923
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 909,
                                "end": 924
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 909,
                        "end": 924
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 907,
                    "end": 926
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 901,
                "end": 926
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 901,
            "end": 927
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 927,
                "end": 940
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 927,
            "end": 941
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 943,
                    "end": 943
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 944,
                    "end": 947
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 949,
                                    "end": 953
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 955,
                                                            "end": 960
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 955,
                                                    "end": 960
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 953,
                                                "end": 961
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 965,
                                                    "end": 965
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 963,
                                                "end": 966
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 953,
                                            "end": 966
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 953,
                                    "end": 966
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 949,
                                "end": 967
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 949,
                        "end": 967
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 947,
                    "end": 969
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 941,
                "end": 969
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 941,
            "end": 970
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 970,
                "end": 983
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 970,
            "end": 984
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 986,
                    "end": 986
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 987,
                    "end": 990
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 992,
                                    "end": 996
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 998,
                                                                "end": 1003
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": {
                                                                "kind": 201392130,
                                                                "text": 0,
                                                                "rawText": "0",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1005,
                                                                "end": 1007
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 998,
                                                            "end": 1007
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 998,
                                                    "end": 1007
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 996,
                                                "end": 1008
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1012,
                                                    "end": 1012
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 1010,
                                                "end": 1013
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 996,
                                            "end": 1013
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 996,
                                    "end": 1013
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 992,
                                "end": 1014
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 992,
                        "end": 1014
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 990,
                    "end": 1016
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 984,
                "end": 1016
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 984,
            "end": 1017
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 1017,
                "end": 1030
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1017,
            "end": 1031
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1033,
                    "end": 1033
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1034,
                    "end": 1037
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 1039,
                                    "end": 1043
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 201,
                                                "elementList": {
                                                    "kind": 324,
                                                    "elements": [
                                                        {
                                                            "kind": 281,
                                                            "ellipsisToken": {
                                                                "kind": 524302,
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 1045,
                                                                "end": 1048
                                                            },
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1048,
                                                                "end": 1053
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "right": null,
                                                            "flags": 32,
                                                            "transformFlags": 4096,
                                                            "start": 1045,
                                                            "end": 1053
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "transformFlags": 0,
                                                    "start": 1045,
                                                    "end": 1053
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1043,
                                                "end": 1054
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 119,
                                                "elementList": {
                                                    "kind": 270,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1058,
                                                    "end": 1058
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 1056,
                                                "end": 1059
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 1043,
                                            "end": 1059
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 1043,
                                    "end": 1059
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 1039,
                                "end": 1060
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1039,
                        "end": 1060
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1037,
                    "end": 1062
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1031,
                "end": 1062
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1031,
            "end": 1063
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 1063,
                "end": 1076
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1063,
            "end": 1077
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1079,
                    "end": 1079
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1080,
                    "end": 1083
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 1085,
                                    "end": 1089
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 329,
                                                            "key": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1091,
                                                                "end": 1092
                                                            },
                                                            "value": {
                                                                "kind": 134299649,
                                                                "text": "yield",
                                                                "rawText": "yield",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1093,
                                                                "end": 1099
                                                            },
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 1091,
                                                            "end": 1099
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1091,
                                                    "end": 1099
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1089,
                                                "end": 1100
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 1104,
                                                    "end": 1104
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 1102,
                                                "end": 1105
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 1089,
                                            "end": 1105
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 1089,
                                    "end": 1105
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 1085,
                                "end": 1106
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1085,
                        "end": 1106
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1083,
                    "end": 1108
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1077,
                "end": 1108
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1077,
            "end": 1109
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "\"use strict\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 1109,
                "end": 1122
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1109,
            "end": 1123
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1125,
                    "end": 1125
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1126,
                    "end": 1129
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 162,
                                "lexicalKeyword": {
                                    "kind": 41951307,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 1131,
                                    "end": 1135
                                },
                                "binding": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 212,
                                                "propertyList": {
                                                    "kind": 213,
                                                    "properties": [
                                                        {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1137,
                                                            "end": 1142
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 1137,
                                                    "end": 1142
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 1135,
                                                "end": 1143
                                            },
                                            "type": null,
                                            "initializer": {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 1147,
                                                    "end": 1147
                                                },
                                                "flags": 48,
                                                "transformFlags": 8,
                                                "start": 1145,
                                                "end": 1148
                                            },
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 1135,
                                            "end": 1148
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 1135,
                                    "end": 1148
                                },
                                "flags": 33554448,
                                "transformFlags": 0,
                                "start": 1131,
                                "end": 1149
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1131,
                        "end": 1149
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1129,
                    "end": 1151
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 1123,
                "end": 1151
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1123,
            "end": 1152
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; (a = yield) => {};\n\"use strict\"; (a = yield /a/g) => {};\n\"use strict\"; yield => {};\n\"use strict\"; (yield) => {};\n\"use strict\"; (yield = 0) => {};\n\"use strict\"; ([yield]) => {};\n\"use strict\"; ([yield = 0]) => {};\n\"use strict\"; ([...yield]) => {};\n\"use strict\"; ({a: yield}) => {};\n\"use strict\"; ({yield}) => {};\n\"use strict\"; ({yield = 0}) => {};\n\"use strict\"; () => yield;\n\"use strict\"; () => yield /a/g;\n\"use strict\"; () => { var x = yield; };\n\"use strict\"; () => { var x = yield /a/g; };\n\"use strict\"; () => { var yield; };\n\"use strict\"; () => { var yield = 0; };\n\"use strict\"; () => { var [yield] = []; };\n\"use strict\"; () => { var [yield = 0] = []; };\n\"use strict\"; () => { var [...yield] = []; };\n\"use strict\"; () => { var {a: yield} = {}; };\n\"use strict\"; () => { var {yield} = {}; };\n\"use strict\"; () => { var {yield = 0} = {}; };\n\"use strict\"; () => { let yield; };\n\"use strict\"; () => { let yield = 0; };\n\"use strict\"; () => { let [yield] = []; };\n\"use strict\"; () => { let [yield = 0] = []; };\n\"use strict\"; () => { let [...yield] = []; };\n\"use strict\"; () => { let {a: yield} = {}; };\n\"use strict\"; () => { let {yield} = {}; };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 1152
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 315, end: 316
✖ Identifier expected. Reserved word in strict mode - start: 315, end: 316
✖ Identifier expected. Reserved word in strict mode - start: 346, end: 348
✖ Identifier expected. Reserved word in strict mode - start: 346, end: 348
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 529, end: 535
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 565, end: 571
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 607, end: 612
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 650, end: 655
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 700, end: 705
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 745, end: 751
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 877, end: 883
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 913, end: 919
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 955, end: 960
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 998, end: 1003
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 1048, end: 1053
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 1093, end: 1099

```

