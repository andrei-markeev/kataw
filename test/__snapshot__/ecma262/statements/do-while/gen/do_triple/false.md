# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/statements/do-while/autogen.md
- Path: kataw/test/__snapshot__/ecma262/statements/do-while/gen/do_triple
> :: test: do triple
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
do do do false while while while
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
                "kind": 169,
                "doKeyword": {
                    "kind": 4202580,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "statement": {
                    "kind": 169,
                    "doKeyword": {
                        "kind": 4202580,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "statement": {
                        "kind": 120,
                        "expression": {
                            "kind": 205586437,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 8,
                        "end": 14
                    },
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 20
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 20
                },
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 26
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 26
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 26,
                "end": 32
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "do do do false while while while",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'while' is not allowed here. Did you mean ';'? - start: 14, end: 20
✖ Missing an opening parentheses - '( - start: 21, end: 26
✖ Missing an opening parentheses - '( - start: 27, end: 32

```

