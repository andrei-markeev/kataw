# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_with_unclosed_block
> :: test: do with unclosed block
> :: case: class x {}
## Options

`````js
{}
`````
## Input

`````js
do {} while (x) { class x {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 178,
                        "declareKeyword": null,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 25
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 25,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 15,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do {} while (x) { class x {}",
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
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 28

```

