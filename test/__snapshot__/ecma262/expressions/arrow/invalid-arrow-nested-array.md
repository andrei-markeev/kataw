# Kataw parser test case

## Input

`````js
([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0
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
                                        "kind": 201,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 201,
                                                                "elementList": {
                                                                    "kind": 270,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 201,
                                                                            "elementList": {
                                                                                "kind": 270,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 201,
                                                                                        "elementList": {
                                                                                            "kind": 270,
                                                                                            "elements": [
                                                                                                {
                                                                                                    "kind": 201,
                                                                                                    "elementList": {
                                                                                                        "kind": 270,
                                                                                                        "elements": [
                                                                                                            {
                                                                                                                "kind": 201,
                                                                                                                "elementList": {
                                                                                                                    "kind": 270,
                                                                                                                    "elements": [
                                                                                                                        {
                                                                                                                            "kind": 201,
                                                                                                                            "elementList": {
                                                                                                                                "kind": 270,
                                                                                                                                "elements": [
                                                                                                                                    {
                                                                                                                                        "kind": 201,
                                                                                                                                        "elementList": {
                                                                                                                                            "kind": 270,
                                                                                                                                            "elements": [
                                                                                                                                                {
                                                                                                                                                    "kind": 201,
                                                                                                                                                    "elementList": {
                                                                                                                                                        "kind": 270,
                                                                                                                                                        "elements": [
                                                                                                                                                            {
                                                                                                                                                                "kind": 201,
                                                                                                                                                                "elementList": {
                                                                                                                                                                    "kind": 270,
                                                                                                                                                                    "elements": [
                                                                                                                                                                        {
                                                                                                                                                                            "kind": 201,
                                                                                                                                                                            "elementList": {
                                                                                                                                                                                "kind": 270,
                                                                                                                                                                                "elements": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "kind": 201,
                                                                                                                                                                                        "elementList": {
                                                                                                                                                                                            "kind": 270,
                                                                                                                                                                                            "elements": [
                                                                                                                                                                                                {
                                                                                                                                                                                                    "kind": 201,
                                                                                                                                                                                                    "elementList": {
                                                                                                                                                                                                        "kind": 270,
                                                                                                                                                                                                        "elements": [
                                                                                                                                                                                                            {
                                                                                                                                                                                                                "kind": 201,
                                                                                                                                                                                                                "elementList": {
                                                                                                                                                                                                                    "kind": 270,
                                                                                                                                                                                                                    "elements": [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            "kind": 201,
                                                                                                                                                                                                                            "elementList": {
                                                                                                                                                                                                                                "kind": 270,
                                                                                                                                                                                                                                "elements": [
                                                                                                                                                                                                                                    {
                                                                                                                                                                                                                                        "kind": 201,
                                                                                                                                                                                                                                        "elementList": {
                                                                                                                                                                                                                                            "kind": 270,
                                                                                                                                                                                                                                            "elements": [
                                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                                    "kind": 201,
                                                                                                                                                                                                                                                    "elementList": {
                                                                                                                                                                                                                                                        "kind": 270,
                                                                                                                                                                                                                                                        "elements": [
                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                "kind": 201,
                                                                                                                                                                                                                                                                "elementList": {
                                                                                                                                                                                                                                                                    "kind": 270,
                                                                                                                                                                                                                                                                    "elements": [
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
                                                                                                                                                                                                                                                                                            "start": 22,
                                                                                                                                                                                                                                                                                            "end": 23
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "value": {
                                                                                                                                                                                                                                                                                            "kind": 130,
                                                                                                                                                                                                                                                                                            "member": {
                                                                                                                                                                                                                                                                                                "kind": 134299649,
                                                                                                                                                                                                                                                                                                "text": "b",
                                                                                                                                                                                                                                                                                                "rawText": "b",
                                                                                                                                                                                                                                                                                                "flags": 96,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 24,
                                                                                                                                                                                                                                                                                                "end": 25
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "expression": {
                                                                                                                                                                                                                                                                                                "kind": 201392130,
                                                                                                                                                                                                                                                                                                "text": 0,
                                                                                                                                                                                                                                                                                                "rawText": "0",
                                                                                                                                                                                                                                                                                                "flags": 96,
                                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                                "start": 26,
                                                                                                                                                                                                                                                                                                "end": 27
                                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                                                                            "transformFlags": 4,
                                                                                                                                                                                                                                                                                            "start": 22,
                                                                                                                                                                                                                                                                                            "end": 28
                                                                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                                                                        "initializer": null,
                                                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                                                        "start": 22,
                                                                                                                                                                                                                                                                                        "end": 28
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                                "start": 22,
                                                                                                                                                                                                                                                                                "end": 28
                                                                                                                                                                                                                                                                            },
                                                                                                                                                                                                                                                                            "flags": 48,
                                                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                                                            "start": 21,
                                                                                                                                                                                                                                                                            "end": 29
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                                    "start": 21,
                                                                                                                                                                                                                                                                    "end": 29
                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                                                "start": 20,
                                                                                                                                                                                                                                                                "end": 30
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        ],
                                                                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                                        "start": 20,
                                                                                                                                                                                                                                                        "end": 30
                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                                                    "start": 19,
                                                                                                                                                                                                                                                    "end": 31
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            ],
                                                                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                                            "start": 19,
                                                                                                                                                                                                                                            "end": 31
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                                                        "start": 18,
                                                                                                                                                                                                                                        "end": 32
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                                "start": 18,
                                                                                                                                                                                                                                "end": 32
                                                                                                                                                                                                                            },
                                                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                                                            "start": 17,
                                                                                                                                                                                                                            "end": 33
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    ],
                                                                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                                    "start": 17,
                                                                                                                                                                                                                    "end": 33
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                                                "start": 16,
                                                                                                                                                                                                                "end": 34
                                                                                                                                                                                                            }
                                                                                                                                                                                                        ],
                                                                                                                                                                                                        "trailingComma": false,
                                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                                        "start": 16,
                                                                                                                                                                                                        "end": 34
                                                                                                                                                                                                    },
                                                                                                                                                                                                    "flags": 32,
                                                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                                                    "start": 15,
                                                                                                                                                                                                    "end": 35
                                                                                                                                                                                                }
                                                                                                                                                                                            ],
                                                                                                                                                                                            "trailingComma": false,
                                                                                                                                                                                            "flags": 32,
                                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                                            "start": 15,
                                                                                                                                                                                            "end": 35
                                                                                                                                                                                        },
                                                                                                                                                                                        "flags": 32,
                                                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                                                        "start": 14,
                                                                                                                                                                                        "end": 36
                                                                                                                                                                                    }
                                                                                                                                                                                ],
                                                                                                                                                                                "trailingComma": false,
                                                                                                                                                                                "flags": 32,
                                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                                "start": 14,
                                                                                                                                                                                "end": 36
                                                                                                                                                                            },
                                                                                                                                                                            "flags": 32,
                                                                                                                                                                            "transformFlags": 0,
                                                                                                                                                                            "start": 13,
                                                                                                                                                                            "end": 37
                                                                                                                                                                        }
                                                                                                                                                                    ],
                                                                                                                                                                    "trailingComma": false,
                                                                                                                                                                    "flags": 32,
                                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                                    "start": 13,
                                                                                                                                                                    "end": 37
                                                                                                                                                                },
                                                                                                                                                                "flags": 32,
                                                                                                                                                                "transformFlags": 0,
                                                                                                                                                                "start": 12,
                                                                                                                                                                "end": 38
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "trailingComma": false,
                                                                                                                                                        "flags": 32,
                                                                                                                                                        "transformFlags": 0,
                                                                                                                                                        "start": 12,
                                                                                                                                                        "end": 38
                                                                                                                                                    },
                                                                                                                                                    "flags": 32,
                                                                                                                                                    "transformFlags": 0,
                                                                                                                                                    "start": 11,
                                                                                                                                                    "end": 39
                                                                                                                                                }
                                                                                                                                            ],
                                                                                                                                            "trailingComma": false,
                                                                                                                                            "flags": 32,
                                                                                                                                            "transformFlags": 0,
                                                                                                                                            "start": 11,
                                                                                                                                            "end": 39
                                                                                                                                        },
                                                                                                                                        "flags": 32,
                                                                                                                                        "transformFlags": 0,
                                                                                                                                        "start": 10,
                                                                                                                                        "end": 40
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "trailingComma": false,
                                                                                                                                "flags": 32,
                                                                                                                                "transformFlags": 0,
                                                                                                                                "start": 10,
                                                                                                                                "end": 40
                                                                                                                            },
                                                                                                                            "flags": 32,
                                                                                                                            "transformFlags": 0,
                                                                                                                            "start": 9,
                                                                                                                            "end": 41
                                                                                                                        }
                                                                                                                    ],
                                                                                                                    "trailingComma": false,
                                                                                                                    "flags": 32,
                                                                                                                    "transformFlags": 0,
                                                                                                                    "start": 9,
                                                                                                                    "end": 41
                                                                                                                },
                                                                                                                "flags": 32,
                                                                                                                "transformFlags": 0,
                                                                                                                "start": 8,
                                                                                                                "end": 42
                                                                                                            }
                                                                                                        ],
                                                                                                        "trailingComma": false,
                                                                                                        "flags": 32,
                                                                                                        "transformFlags": 0,
                                                                                                        "start": 8,
                                                                                                        "end": 42
                                                                                                    },
                                                                                                    "flags": 32,
                                                                                                    "transformFlags": 0,
                                                                                                    "start": 7,
                                                                                                    "end": 43
                                                                                                }
                                                                                            ],
                                                                                            "trailingComma": false,
                                                                                            "flags": 32,
                                                                                            "transformFlags": 0,
                                                                                            "start": 7,
                                                                                            "end": 43
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "transformFlags": 0,
                                                                                        "start": 6,
                                                                                        "end": 44
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "transformFlags": 0,
                                                                                "start": 6,
                                                                                "end": 44
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 5,
                                                                            "end": 45
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 5,
                                                                    "end": 45
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 0,
                                                                "start": 4,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 4,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 3,
                                                    "end": 47
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 47
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 2,
                                        "end": 48
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 48
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 49
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 50
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 52
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 52,
                    "end": 53
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "([[[[[[[[[[[[[[[[[[[[{a:b[0]}]]]]]]]]]]]]]]]]]]]])=>0",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 50, end: 52

```

