# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: x, [foo + y, bar] = zoo;
## Options

`````js
{}
`````
## Input

`````js
"use strict"; x, [foo + y, bar] = zoo;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
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
                                            "start": 18,
                                            "end": 21
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "transformFlags": 5120,
                                        "start": 18,
                                        "end": 25
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 30
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 16,
                            "end": 31
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 33
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 37
                        },
                        "flags": 32,
                        "transformFlags": 128,
                        "start": 16,
                        "end": 37
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 13,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; x, [foo + y, bar] = zoo;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 31, end: 33

```

