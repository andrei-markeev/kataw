# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/block/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/block/gen/x007b_triple
> :: test: { triple
> :: case: let const x = var
## Options

`````js
{}
`````
## Input

`````js
{ { { let const x = var
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
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "let",
                                                    "rawText": "let",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 9
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 5,
                                                "end": 9
                                            },
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 15
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "rawText": "",
                                                                "flags": 64,
                                                                "transformFlags": 0,
                                                                "start": 19,
                                                                "end": 19
                                                            },
                                                            "flags": 16,
                                                            "transformFlags": 4224,
                                                            "start": 15,
                                                            "end": 19
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "flags": 33554448,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 19
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 23
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [],
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 23,
                                                    "end": 23
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 23
                                            }
                                        ],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ { { let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'const' is not allowed here. Did you mean ';'? - start: 9, end: 15
✖ Identifier expected - start: 19, end: 23
✖ Lexical declaration expected - start: 19, end: 23

```

