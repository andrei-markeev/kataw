# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/assignment/keyword_with_escapes_check/gen/inside_an_async_func
> :: test: inside an async func
> :: case: \u0066inally
## Options

`````js
{}
`````
## Input

`````js
async () => {  \u0066inally = x  }
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": null,
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 13
                                    },
                                    "flags": 16400,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 13
                                },
                                "catchClause": null,
                                "finallyKeyword": {
                                    "kind": 37757016,
                                    "flags": 16448,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 27
                                },
                                "finallyBlock": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 27
                            }
                        ],
                        "flags": 16416,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 27
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 27
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 29,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "async () => {  \\u0066inally = x  }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 28, end: 29
✖ Declaration or statement expected - start: 31, end: 34

```

