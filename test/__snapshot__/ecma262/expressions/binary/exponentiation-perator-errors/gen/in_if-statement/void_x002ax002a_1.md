# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/exponentiation-perator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/exponentiation-perator-errors/gen/in_if-statement
> :: test: in if-statement
> :: case: void ** 1
## Options

`````js
{}
`````
## Input

`````js
var O = { p: 1 }, x = 10; ; if (void ** 1) { foo(); }
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "O",
                            "rawText": "O",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "p",
                                            "rawText": "p",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 11
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 14
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 9,
                                        "end": 14
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 14
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 16
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 24
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 27
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 27,
                "end": 30
            },
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 138477615,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 36
                    },
                    "operand": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 32,
                    "end": 36
                },
                "operatorToken": {
                    "kind": 35897,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 39
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 39,
                    "end": 41
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 32,
                "end": 41
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 48
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 49,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 1,
                                "start": 44,
                                "end": 50
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 44,
                            "end": 51
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 51
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 42,
                "end": 53
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 27,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "var O = { p: 1 }, x = 10; ; if (void ** 1) { foo(); }",
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
✖ Identifier expected - start: 36, end: 39
✖ Unary expressions as the left operand of an exponentation expression must be disambiguated with parentheses - start: 36, end: 39

```

