# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: await.b[c] => async
## Options

`````js
{}
`````
## Input

`````js
'use strict'; await.b[c] => async
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
            "rawText": "'use strict'",
            "flags": 4194400,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 19
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 13,
                    "end": 21
                },
                "expression": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 13,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "'use strict'; await.b[c] => async",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' is not allowed here. Did you mean ';'? - start: 24, end: 27

```

