# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/missing_parens_and_block
> :: test: missing parens and block
> :: case: class x {}
## Options

`````js
{}
`````
## Input

`````js
do class x {} while
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
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
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
                        "start": 12,
                        "end": 12
                    },
                    "flags": 10,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 13
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 13
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "do class x {} while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class declarations cannot be used in a single-statement context - start: 2, end: 8
✖ Missing an opening parentheses - '( - start: 14, end: 19

```

