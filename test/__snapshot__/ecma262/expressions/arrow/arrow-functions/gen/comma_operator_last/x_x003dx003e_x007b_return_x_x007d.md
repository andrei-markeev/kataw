# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/arrow-functions/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/arrow-functions/gen/comma_operator_last
> :: test: comma operator last
> :: case: x => { return x; }
## Options

`````js
{}
`````
## Input

`````js
x => { return x; }, bar
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 4
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 161,
                                        "returnKeyword": {
                                            "kind": 37757022,
                                            "flags": 80,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "flags": 16,
                                        "transformFlags": 256,
                                        "start": 6,
                                        "end": 16
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 16
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 18
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 18
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 23
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "x => { return x; }, bar",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
x => {
  return x;
}, bar;
```

### Diagnostics

```javascript
✔ No errors
```

