# Kataw parser test case

## Input

`````js
(class X { a; })

(class { a = 0;});
(class {a = 0; b});
(class {a = 0; b(){}});
(class {a = 0; *b(){}});
(class {a = 0; ['b'](){}});
(class {a;});
(class {a; b;});
(class {a; b(){}});
(class {a; *b(){}});
(class {a; ['b'](){}});
(class {['a'] = 0;});
(class {['a'] = 0; b});
(class {['a'] = 0; b(){}});
(class {['a'] = 0; *b(){}});
(class {['a'] = 0; ['b'](){}});
(class {['a'];});
(class {['a']; b;});
(class {['a']; b(){}});
(class {['a']; *b(){}});
(class {['a']; ['b'](){}});

(class {0 = 0;});
(class {0;});
(class {'a' = 0;});
(class {'a';});

(class {a = 0
});

(class {a = 0
 b});

(class {a = 0
 b(){}});

(class {a
});

(class {a
 b
 });

(class {a
 b(){}});

(class {a
 *b(){}});

(class {a
 ['b'](){}});

(class {['a'] = 0
});

(class {['a'] = 0
 b});

(class {['a'] = 0
 b(){}});

(class {['a']
});

(class {['a']
 b
 });

(class {['a']
 b(){}});

(class {['a']
 *b(){}});

(class {['a']
 ['b'](){}});
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
                "kind": 131,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "X",
                            "rawText": "X",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [
                                    {
                                        "kind": 280,
                                        "decorators": null,
                                        "declaredToken": null,
                                        "staticKeyword": null,
                                        "asyncKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 10,
                                        "end": 12
                                    },
                                    {
                                        "kind": 1108353041,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 13
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 8,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 15
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 16
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 24
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 280,
                                            "decorators": null,
                                            "declaredToken": null,
                                            "staticKeyword": null,
                                            "asyncKeyword": null,
                                            "key": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 28
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "flags": 32,
                                            "transformFlags": 128,
                                            "start": 26,
                                            "end": 32
                                        },
                                        {
                                            "kind": 1108353041,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 33
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 24,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 34
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 34
                },
                "flags": 33,
                "transformFlags": 1,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 43
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 45,
                                        "end": 46
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 48,
                                        "end": 50
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 45,
                                    "end": 50
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 50,
                                    "end": 51
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 51,
                                        "end": 53
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 51,
                                    "end": 53
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 53
                        },
                        "flags": 43,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 54
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 54
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 36,
                "end": 55
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 36,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 63
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 65,
                                        "end": 66
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 68,
                                        "end": 70
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 65,
                                    "end": 70
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 70,
                                    "end": 71
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 73
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 74,
                                            "end": 75
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 76,
                                                "end": 76
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 77
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 73,
                                        "end": 77
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 71,
                                    "end": 77
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 65,
                            "end": 77
                        },
                        "flags": 63,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 78
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 78
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 56,
                "end": 79
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 56,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 82,
                        "end": 87
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 89,
                                        "end": 90
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 92,
                                        "end": 94
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 89,
                                    "end": 94
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 94,
                                    "end": 95
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 95,
                                        "end": 97
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 97,
                                            "end": 98
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 99,
                                            "end": 100
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 101,
                                                "end": 101
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 100,
                                            "end": 102
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 98,
                                        "end": 102
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 95,
                                    "end": 102
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 89,
                            "end": 102
                        },
                        "flags": 87,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 103
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 82,
                    "end": 103
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 80,
                "end": 104
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 80,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 107,
                        "end": 112
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 114,
                                        "end": 115
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 117,
                                        "end": 119
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 114,
                                    "end": 119
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 119,
                                    "end": 120
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 122,
                                                "end": 125
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 120,
                                            "end": 126
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 127,
                                            "end": 128
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 129,
                                                "end": 129
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 128,
                                            "end": 130
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 126,
                                        "end": 130
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 120,
                                    "end": 130
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 130
                        },
                        "flags": 112,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 131
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 107,
                    "end": 131
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 105,
                "end": 132
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 105,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 135,
                        "end": 140
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 142,
                                        "end": 143
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 142,
                                    "end": 143
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 144
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 142,
                            "end": 144
                        },
                        "flags": 140,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 145
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 135,
                    "end": 145
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 133,
                "end": 146
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 133,
            "end": 147
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 149,
                        "end": 154
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 156,
                                        "end": 157
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 156,
                                    "end": 157
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 157,
                                    "end": 158
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 158,
                                        "end": 160
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 158,
                                    "end": 160
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 160,
                                    "end": 161
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 156,
                            "end": 161
                        },
                        "flags": 154,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 162
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 149,
                    "end": 162
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 147,
                "end": 163
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 147,
            "end": 164
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 166,
                        "end": 171
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 173,
                                        "end": 174
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 173,
                                    "end": 174
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 174,
                                    "end": 175
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 175,
                                            "end": 177
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 178,
                                            "end": 179
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 180,
                                                "end": 180
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 179,
                                            "end": 181
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 177,
                                        "end": 181
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 175,
                                    "end": 181
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 181
                        },
                        "flags": 171,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 182
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 166,
                    "end": 182
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 164,
                "end": 183
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 164,
            "end": 184
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 186,
                        "end": 191
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 193,
                                        "end": 194
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 193,
                                    "end": 194
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 194,
                                    "end": 195
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 195,
                                        "end": 197
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 197,
                                            "end": 198
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 199,
                                            "end": 200
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 201,
                                                "end": 201
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 200,
                                            "end": 202
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 198,
                                        "end": 202
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 195,
                                    "end": 202
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 193,
                            "end": 202
                        },
                        "flags": 191,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 203
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 186,
                    "end": 203
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 184,
                "end": 204
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 184,
            "end": 205
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 207,
                        "end": 212
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 214,
                                        "end": 215
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 214,
                                    "end": 215
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 215,
                                    "end": 216
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 218,
                                                "end": 221
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 216,
                                            "end": 222
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 223,
                                            "end": 224
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 225,
                                                "end": 225
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 224,
                                            "end": 226
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 222,
                                        "end": 226
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 216,
                                    "end": 226
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 214,
                            "end": 226
                        },
                        "flags": 212,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 227
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 207,
                    "end": 227
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 205,
                "end": 228
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 205,
            "end": 229
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 231,
                        "end": 236
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 239,
                                            "end": 242
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 238,
                                        "end": 243
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 245,
                                        "end": 247
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 238,
                                    "end": 247
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 247,
                                    "end": 248
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 238,
                            "end": 248
                        },
                        "flags": 236,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 249
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 231,
                    "end": 249
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 229,
                "end": 250
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 229,
            "end": 251
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 253,
                        "end": 258
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 261,
                                            "end": 264
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 260,
                                        "end": 265
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 267,
                                        "end": 269
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 260,
                                    "end": 269
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 269,
                                    "end": 270
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 270,
                                        "end": 272
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 270,
                                    "end": 272
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 260,
                            "end": 272
                        },
                        "flags": 258,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 273
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 253,
                    "end": 273
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 251,
                "end": 274
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 251,
            "end": 275
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 277,
                        "end": 282
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 285,
                                            "end": 288
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 284,
                                        "end": 289
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 291,
                                        "end": 293
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 284,
                                    "end": 293
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 294
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 294,
                                            "end": 296
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 297,
                                            "end": 298
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 299,
                                                "end": 299
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 298,
                                            "end": 300
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 296,
                                        "end": 300
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 294,
                                    "end": 300
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 284,
                            "end": 300
                        },
                        "flags": 282,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 301
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 277,
                    "end": 301
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 275,
                "end": 302
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 275,
            "end": 303
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 305,
                        "end": 310
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 313,
                                            "end": 316
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 312,
                                        "end": 317
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 319,
                                        "end": 321
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 312,
                                    "end": 321
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 321,
                                    "end": 322
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 322,
                                        "end": 324
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 324,
                                            "end": 325
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 326,
                                            "end": 327
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 328,
                                                "end": 328
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 327,
                                            "end": 329
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 325,
                                        "end": 329
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 322,
                                    "end": 329
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 312,
                            "end": 329
                        },
                        "flags": 310,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 330
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 305,
                    "end": 330
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 303,
                "end": 331
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 303,
            "end": 332
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 334,
                        "end": 339
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 342,
                                            "end": 345
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 341,
                                        "end": 346
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 348,
                                        "end": 350
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 341,
                                    "end": 350
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 350,
                                    "end": 351
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 353,
                                                "end": 356
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 351,
                                            "end": 357
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 358,
                                            "end": 359
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 360,
                                                "end": 360
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 359,
                                            "end": 361
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 357,
                                        "end": 361
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 351,
                                    "end": 361
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 341,
                            "end": 361
                        },
                        "flags": 339,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 362
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 334,
                    "end": 362
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 332,
                "end": 363
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 332,
            "end": 364
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 366,
                        "end": 371
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 374,
                                            "end": 377
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 373,
                                        "end": 378
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 373,
                                    "end": 378
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 378,
                                    "end": 379
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 373,
                            "end": 379
                        },
                        "flags": 371,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 380
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 366,
                    "end": 380
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 364,
                "end": 381
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 364,
            "end": 382
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 384,
                        "end": 389
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 392,
                                            "end": 395
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 391,
                                        "end": 396
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 391,
                                    "end": 396
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 396,
                                    "end": 397
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 397,
                                        "end": 399
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 397,
                                    "end": 399
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 399,
                                    "end": 400
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 391,
                            "end": 400
                        },
                        "flags": 389,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 401
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 384,
                    "end": 401
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 382,
                "end": 402
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 382,
            "end": 403
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 405,
                        "end": 410
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 413,
                                            "end": 416
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 412,
                                        "end": 417
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 412,
                                    "end": 417
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 417,
                                    "end": 418
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 418,
                                            "end": 420
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 421,
                                            "end": 422
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 423,
                                                "end": 423
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 422,
                                            "end": 424
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 420,
                                        "end": 424
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 418,
                                    "end": 424
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 412,
                            "end": 424
                        },
                        "flags": 410,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 425
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 405,
                    "end": 425
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 403,
                "end": 426
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 403,
            "end": 427
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 429,
                        "end": 434
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 437,
                                            "end": 440
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 436,
                                        "end": 441
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 436,
                                    "end": 441
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 441,
                                    "end": 442
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 64,
                                        "transformFlags": 32,
                                        "start": 442,
                                        "end": 444
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 444,
                                            "end": 445
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 446,
                                            "end": 447
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 448,
                                                "end": 448
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 447,
                                            "end": 449
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 445,
                                        "end": 449
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 442,
                                    "end": 449
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 436,
                            "end": 449
                        },
                        "flags": 434,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 450
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 429,
                    "end": 450
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 427,
                "end": 451
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 427,
            "end": 452
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 454,
                        "end": 459
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 462,
                                            "end": 465
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 461,
                                        "end": 466
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 461,
                                    "end": 466
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 466,
                                    "end": 467
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 469,
                                                "end": 472
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 467,
                                            "end": 473
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 474,
                                            "end": 475
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 476,
                                                "end": 476
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 475,
                                            "end": 477
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 473,
                                        "end": 477
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 467,
                                    "end": 477
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 461,
                            "end": 477
                        },
                        "flags": 459,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 478
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 454,
                    "end": 478
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 452,
                "end": 479
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 452,
            "end": 480
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 483,
                        "end": 488
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 490,
                                        "end": 491
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 493,
                                        "end": 495
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 490,
                                    "end": 495
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 495,
                                    "end": 496
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 490,
                            "end": 496
                        },
                        "flags": 488,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 497
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 483,
                    "end": 497
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 480,
                "end": 498
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 480,
            "end": 499
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 501,
                        "end": 506
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 508,
                                        "end": 509
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 508,
                                    "end": 509
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 509,
                                    "end": 510
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 508,
                            "end": 510
                        },
                        "flags": 506,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 511
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 501,
                    "end": 511
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 499,
                "end": 512
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 499,
            "end": 513
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 515,
                        "end": 520
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 522,
                                        "end": 525
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 527,
                                        "end": 529
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 522,
                                    "end": 529
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 529,
                                    "end": 530
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 522,
                            "end": 530
                        },
                        "flags": 520,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 531
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 515,
                    "end": 531
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 513,
                "end": 532
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 513,
            "end": 533
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 535,
                        "end": 540
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 201392131,
                                        "text": "a",
                                        "rawText": "'a'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 542,
                                        "end": 545
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 542,
                                    "end": 545
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 545,
                                    "end": 546
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 542,
                            "end": 546
                        },
                        "flags": 540,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 547
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 535,
                    "end": 547
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 533,
                "end": 548
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 533,
            "end": 549
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 552,
                        "end": 557
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 559,
                                        "end": 560
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 562,
                                        "end": 564
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 559,
                                    "end": 564
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 559,
                            "end": 564
                        },
                        "flags": 557,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 566
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 552,
                    "end": 566
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 549,
                "end": 567
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 549,
            "end": 568
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 571,
                        "end": 576
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 578,
                                        "end": 579
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 581,
                                        "end": 583
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 578,
                                    "end": 583
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 583,
                                        "end": 586
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 583,
                                    "end": 586
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 578,
                            "end": 586
                        },
                        "flags": 576,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 587
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 571,
                    "end": 587
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 568,
                "end": 588
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 568,
            "end": 589
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 592,
                        "end": 597
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 599,
                                        "end": 600
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 602,
                                        "end": 604
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 599,
                                    "end": 604
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 604,
                                            "end": 607
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 608,
                                            "end": 609
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 610,
                                                "end": 610
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 609,
                                            "end": 611
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 607,
                                        "end": 611
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 604,
                                    "end": 611
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 599,
                            "end": 611
                        },
                        "flags": 597,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 612
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 592,
                    "end": 612
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 589,
                "end": 613
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 589,
            "end": 614
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 617,
                        "end": 622
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 624,
                                        "end": 625
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 624,
                                    "end": 625
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 624,
                            "end": 625
                        },
                        "flags": 622,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 627
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 617,
                    "end": 627
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 614,
                "end": 628
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 614,
            "end": 629
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 632,
                        "end": 637
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 639,
                                        "end": 640
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 639,
                                    "end": 640
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 640,
                                        "end": 643
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 640,
                                    "end": 643
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 639,
                            "end": 643
                        },
                        "flags": 637,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 646
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 632,
                    "end": 646
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 629,
                "end": 647
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 629,
            "end": 648
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 651,
                        "end": 656
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 658,
                                        "end": 659
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 658,
                                    "end": 659
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 659,
                                            "end": 662
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 663,
                                            "end": 664
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 665,
                                                "end": 665
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 664,
                                            "end": 666
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 662,
                                        "end": 666
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 659,
                                    "end": 666
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 658,
                            "end": 666
                        },
                        "flags": 656,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 667
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 651,
                    "end": 667
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 648,
                "end": 668
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 648,
            "end": 669
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 672,
                        "end": 677
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 679,
                                        "end": 680
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 679,
                                    "end": 680
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 65,
                                        "transformFlags": 32,
                                        "start": 680,
                                        "end": 683
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 683,
                                            "end": 684
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 685,
                                            "end": 686
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 687,
                                                "end": 687
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 686,
                                            "end": 688
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 684,
                                        "end": 688
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 680,
                                    "end": 688
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 679,
                            "end": 688
                        },
                        "flags": 677,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 689
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 672,
                    "end": 689
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 669,
                "end": 690
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 669,
            "end": 691
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 694,
                        "end": 699
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 701,
                                        "end": 702
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 701,
                                    "end": 702
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 705,
                                                "end": 708
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 702,
                                            "end": 709
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 710,
                                            "end": 711
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 712,
                                                "end": 712
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 711,
                                            "end": 713
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 709,
                                        "end": 713
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 702,
                                    "end": 713
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 701,
                            "end": 713
                        },
                        "flags": 699,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 714
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 694,
                    "end": 714
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 691,
                "end": 715
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 691,
            "end": 716
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 719,
                        "end": 724
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 727,
                                            "end": 730
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 726,
                                        "end": 731
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 733,
                                        "end": 735
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 726,
                                    "end": 735
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 726,
                            "end": 735
                        },
                        "flags": 724,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 737
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 719,
                    "end": 737
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 716,
                "end": 738
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 716,
            "end": 739
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 742,
                        "end": 747
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 750,
                                            "end": 753
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 749,
                                        "end": 754
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 756,
                                        "end": 758
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 749,
                                    "end": 758
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 758,
                                        "end": 761
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 758,
                                    "end": 761
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 749,
                            "end": 761
                        },
                        "flags": 747,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 762
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 742,
                    "end": 762
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 739,
                "end": 763
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 739,
            "end": 764
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 767,
                        "end": 772
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 775,
                                            "end": 778
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 774,
                                        "end": 779
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 781,
                                        "end": 783
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 774,
                                    "end": 783
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 783,
                                            "end": 786
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 787,
                                            "end": 788
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 789,
                                                "end": 789
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 788,
                                            "end": 790
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 786,
                                        "end": 790
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 783,
                                    "end": 790
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 774,
                            "end": 790
                        },
                        "flags": 772,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 791
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 767,
                    "end": 791
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 764,
                "end": 792
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 764,
            "end": 793
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 796,
                        "end": 801
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 804,
                                            "end": 807
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 803,
                                        "end": 808
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 803,
                                    "end": 808
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 803,
                            "end": 808
                        },
                        "flags": 801,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 810
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 796,
                    "end": 810
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 793,
                "end": 811
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 793,
            "end": 812
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 815,
                        "end": 820
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 823,
                                            "end": 826
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 822,
                                        "end": 827
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 822,
                                    "end": 827
                                },
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 827,
                                        "end": 830
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 827,
                                    "end": 830
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 822,
                            "end": 830
                        },
                        "flags": 820,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 833
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 815,
                    "end": 833
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 812,
                "end": 834
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 812,
            "end": 835
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 838,
                        "end": 843
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 846,
                                            "end": 849
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 845,
                                        "end": 850
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 845,
                                    "end": 850
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 850,
                                            "end": 853
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 854,
                                            "end": 855
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 856,
                                                "end": 856
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 855,
                                            "end": 857
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 853,
                                        "end": 857
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 850,
                                    "end": 857
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 845,
                            "end": 857
                        },
                        "flags": 843,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 858
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 838,
                    "end": 858
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 835,
                "end": 859
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 835,
            "end": 860
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 863,
                        "end": 868
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 871,
                                            "end": 874
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 870,
                                        "end": 875
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 870,
                                    "end": 875
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": {
                                        "kind": 201360950,
                                        "flags": 65,
                                        "transformFlags": 32,
                                        "start": 875,
                                        "end": 878
                                    },
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 878,
                                            "end": 879
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 880,
                                            "end": 881
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 882,
                                                "end": 882
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 881,
                                            "end": 883
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 879,
                                        "end": 883
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 875,
                                    "end": 883
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 870,
                            "end": 883
                        },
                        "flags": 868,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 884
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 863,
                    "end": 884
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 860,
                "end": 885
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 860,
            "end": 886
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 889,
                        "end": 894
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 897,
                                            "end": 900
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 896,
                                        "end": 901
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 896,
                                    "end": 901
                                },
                                {
                                    "kind": 278,
                                    "declareToken": null,
                                    "decorators": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "setKeyword": null,
                                    "getKeyword": null,
                                    "asteriskToken": null,
                                    "method": {
                                        "kind": 209,
                                        "name": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392131,
                                                "text": "b",
                                                "rawText": "'b'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 904,
                                                "end": 907
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 901,
                                            "end": 908
                                        },
                                        "typeParameters": null,
                                        "formalParameterList": {
                                            "kind": 214,
                                            "formalParameters": [],
                                            "trailingComma": false,
                                            "flags": 0,
                                            "transformFlags": 0,
                                            "start": 909,
                                            "end": 910
                                        },
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 911,
                                                "end": 911
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 910,
                                            "end": 912
                                        },
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 908,
                                        "end": 912
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 901,
                                    "end": 912
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 896,
                            "end": 912
                        },
                        "flags": 894,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 913
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 889,
                    "end": 913
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 886,
                "end": 914
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 886,
            "end": 915
        }
    ],
    "isModule": false,
    "source": "(class X { a; })\n\n(class { a = 0;});\n(class {a = 0; b});\n(class {a = 0; b(){}});\n(class {a = 0; *b(){}});\n(class {a = 0; ['b'](){}});\n(class {a;});\n(class {a; b;});\n(class {a; b(){}});\n(class {a; *b(){}});\n(class {a; ['b'](){}});\n(class {['a'] = 0;});\n(class {['a'] = 0; b});\n(class {['a'] = 0; b(){}});\n(class {['a'] = 0; *b(){}});\n(class {['a'] = 0; ['b'](){}});\n(class {['a'];});\n(class {['a']; b;});\n(class {['a']; b(){}});\n(class {['a']; *b(){}});\n(class {['a']; ['b'](){}});\n\n(class {0 = 0;});\n(class {0;});\n(class {'a' = 0;});\n(class {'a';});\n\n(class {a = 0\n});\n\n(class {a = 0\n b});\n\n(class {a = 0\n b(){}});\n\n(class {a\n});\n\n(class {a\n b\n });\n\n(class {a\n b(){}});\n\n(class {a\n *b(){}});\n\n(class {a\n ['b'](){}});\n\n(class {['a'] = 0\n});\n\n(class {['a'] = 0\n b});\n\n(class {['a'] = 0\n b(){}});\n\n(class {['a']\n});\n\n(class {['a']\n b\n });\n\n(class {['a']\n b(){}});\n\n(class {['a']\n *b(){}});\n\n(class {['a']\n ['b'](){}});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 915
}
```

### Printed

```javascript
(class X {
    a;;
  })(class {
    a = 0;;
  });
(class {
    a = 0;;
    b;
  });

(class {
    a = 0;;
    b() {}
  });

(class {
    a = 0;;
    *b() {}
  });

(class {
    a = 0;;
    ["'b'"]() {}
  });

(class {
    a;;
  });

(class {
    a;;
    b;;
  });

(class {
    a;;
    b() {}
  });

(class {
    a;;
    *b() {}
  });

(class {
    a;;
    ["'b'"]() {}
  });

(class {
    ["'a'"] = 0;;
  });

(class {
    ["'a'"] = 0;;
    b;
  });

(class {
    ["'a'"] = 0;;
    b() {}
  });

(class {
    ["'a'"] = 0;;
    *b() {}
  });

(class {
    ["'a'"] = 0;;
    ["'b'"]() {}
  });

(class {
    ["'a'"];;
  });

(class {
    ["'a'"];;
    b;;
  });

(class {
    ["'a'"];;
    b() {}
  });

(class {
    ["'a'"];;
    *b() {}
  });

(class {
    ["'a'"];;
    ["'b'"]() {}
  });

(class {
    0 = 0;;
  });

(class {
    0;;
  });

(class {
    "'a'" = 0;;
  });

(class {
    "'a'";;
  });

(class {
    a = 0;
  });

(class {
    a = 0;
    b;
  });

(class {
    a = 0;
    b() {}
  });

(class {
    a;
  });

(class {
    a;
    b;
  });

(class {
    a;
    b() {}
  });

(class {
    a;
    *b() {}
  });

(class {
    a;
    ["'b'"]() {}
  });

(class {
    ["'a'"] = 0;
  });

(class {
    ["'a'"] = 0;
    b;
  });

(class {
    ["'a'"] = 0;
    b() {}
  });

(class {
    ["'a'"];
  });

(class {
    ["'a'"];
    b;
  });

(class {
    ["'a'"];
    b() {}
  });

(class {
    ["'a'"];
    *b() {}
  });

(class {
    ["'a'"];
    ["'b'"]() {}
  });

```

### Diagnostics

```javascript
✔ No errors
```

