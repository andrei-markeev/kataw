# Kataw parser test case

## Input

`````js
x == y == z;
x != y == z;
x == y != z;
x != y != z;

x === y === z;
x !== y === z;
x === y !== z;
x !== y !== z;

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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 1,
                        "end": 4
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 6,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 34623,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 14,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 12,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 34622,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 19,
                    "end": 22
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 24
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 12,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 34622,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 27,
                        "end": 30
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 32
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 25,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 32,
                    "end": 35
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 25,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 38,
                        "end": 40
                    },
                    "operatorToken": {
                        "kind": 34623,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 40,
                        "end": 43
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 43,
                        "end": 45
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 38,
                    "end": 45
                },
                "operatorToken": {
                    "kind": 34623,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 45,
                    "end": 48
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 50
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 38,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 54
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 54,
                        "end": 58
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 58,
                        "end": 60
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 51,
                    "end": 60
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 60,
                    "end": 64
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 66
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 51,
                "end": 66
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 51,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 67,
                        "end": 69
                    },
                    "operatorToken": {
                        "kind": 34621,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 69,
                        "end": 73
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 73,
                        "end": 75
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 67,
                    "end": 75
                },
                "operatorToken": {
                    "kind": 34620,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 75,
                    "end": 79
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 81
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 67,
                "end": 81
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 67,
            "end": 82
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 82,
                        "end": 84
                    },
                    "operatorToken": {
                        "kind": 34620,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 84,
                        "end": 88
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 88,
                        "end": 90
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 82,
                    "end": 90
                },
                "operatorToken": {
                    "kind": 34621,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 90,
                    "end": 94
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 94,
                    "end": 96
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 82,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 82,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 97,
                        "end": 99
                    },
                    "operatorToken": {
                        "kind": 34621,
                        "flags": 96,
                        "transformFlags": 16,
                        "start": 99,
                        "end": 103
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 103,
                        "end": 105
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 97,
                    "end": 105
                },
                "operatorToken": {
                    "kind": 34621,
                    "flags": 96,
                    "transformFlags": 16,
                    "start": 105,
                    "end": 109
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 109,
                    "end": 111
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 97,
                "end": 111
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 97,
            "end": 112
        }
    ],
    "isModule": false,
    "source": "x == y == z;\nx != y == z;\nx == y != z;\nx != y != z;\n\nx === y === z;\nx !== y === z;\nx === y !== z;\nx !== y !== z;\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript
x == y == z;
x != y == z;

x == y != z;

x != y != z;

x === y === z;

x !== y === z;

x === y !== z;

x !== y !== z;

```

### Diagnostics

```javascript
✔ No errors
```

