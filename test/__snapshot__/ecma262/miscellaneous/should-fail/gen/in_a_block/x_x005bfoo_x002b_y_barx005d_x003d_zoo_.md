# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/in_a_block
> :: test: in a block
> :: case: x, [foo + y, bar] = zoo;
## Options

`````js
{}
`````
## Input

`````js
{ x, [foo + y, bar] = zoo; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 132,
                            "expressions": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 3
                                },
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 198,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 6,
                                                        "end": 9
                                                    },
                                                    "operatorToken": {
                                                        "kind": 99634,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 9,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 11,
                                                        "end": 13
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 5120,
                                                    "start": 6,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 18
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 18
                                        },
                                        "flags": 32,
                                        "transformFlags": 8,
                                        "start": 4,
                                        "end": 19
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "zoo",
                                        "rawText": "zoo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 4,
                                    "end": 25
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 1,
                            "end": 25
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "{ x, [foo + y, bar] = zoo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 19, end: 21

```

