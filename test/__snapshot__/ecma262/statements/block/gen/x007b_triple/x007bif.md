# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: {if
## Options

`````js
{}
`````
## Input

`````js
{ { { {if
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
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 164,
                                                            "ifKeyword": {
                                                                "kind": 37757019,
                                                                "flags": 80,
                                                                "transformFlags": 0,
                                                                "start": 7,
                                                                "end": 9
                                                            },
                                                            "expression": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 9,
                                                                "end": 9
                                                            },
                                                            "consequent": {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 16637,
                                                                    "text": "",
                                                                    "rawText": "",
                                                                    "flags": 64,
                                                                    "transformFlags": 0,
                                                                    "start": 9,
                                                                    "end": 9
                                                                },
                                                                "flags": 16,
                                                                "transformFlags": 4096,
                                                                "start": 9,
                                                                "end": 9
                                                            },
                                                            "elseKeyword": null,
                                                            "alternate": null,
                                                            "flags": 16,
                                                            "transformFlags": 0,
                                                            "start": 7,
                                                            "end": 9
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 7,
                                                    "end": 9
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 9
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 9
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "{ { { {if",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 7, end: 9

```

