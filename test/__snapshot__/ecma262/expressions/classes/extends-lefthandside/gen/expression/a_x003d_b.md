# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/expression
> :: test: expression
> :: case: a = b
## Options

`````js
{}
`````
## Input

`````js
(class B extends a = b {})
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
                "kind": 121,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 189,
                        "decorators": null,
                        "classKeyword": {
                            "kind": 37822544,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 6
                        },
                        "name": {
                            "kind": 134299649,
                            "text": "B",
                            "rawText": "B",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": {
                                "kind": 279,
                                "extendsKeyword": {
                                    "kind": 4194391,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 16
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 18
                                },
                                "typeParameter": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 8
                            },
                            "flags": 8,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 18
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 0,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "(class B extends a = b {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 19, end: 20
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 18, end: 20
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ Declaration or statement expected - start: 25, end: 26

```

