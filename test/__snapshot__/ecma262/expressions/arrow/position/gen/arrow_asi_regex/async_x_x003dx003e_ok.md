# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/arrow_asi_regex
> :: test: arrow asi regex
> :: case: async x => ok
## Options

`````js
{}
`````
## Input

`````js
async x => ok
/x/
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 10
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "ok",
                            "rawText": "ok",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 13
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 97,
                            "transformFlags": 32,
                            "start": 13,
                            "end": 15
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 16
                        },
                        "flags": 33,
                        "transformFlags": 5120,
                        "start": 10,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 96,
                        "transformFlags": 32,
                        "start": 16,
                        "end": 17
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 17
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 10,
                    "end": 17
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "async x => ok\n/x/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 17, end: 17

```

