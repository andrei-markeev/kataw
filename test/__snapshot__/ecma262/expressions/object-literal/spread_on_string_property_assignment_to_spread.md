# Kataw parser test case

## Input

`````js
x={..."foo".foo=x}

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
                "kind": 125,
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
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 2
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 6
                                },
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 201392131,
                                            "text": "foo",
                                            "rawText": "\"foo\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 11
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "transformFlags": 2,
                                        "start": 6,
                                        "end": 15
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 16
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 17
                                    },
                                    "flags": 0,
                                    "transformFlags": 128,
                                    "start": 6,
                                    "end": 17
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 2,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "x={...\"foo\".foo=x}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
x = { ..."\"foo\"".foo = x };
```

### Diagnostics

```javascript
✔ No errors
```

