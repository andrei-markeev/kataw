# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/escaped-keywords/gen/stand-alone
> :: test: stand-alone
> :: case: switch (this.a) { c\u0061se 6: break; }
## Options

`````js
{}
`````
## Input

`````js
switch (this.a) { c\u0061se 6: break; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 4276321,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 12
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 8,
                "end": 14
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 16464,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 27
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 6,
                            "rawText": "6",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 30
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 36
                                },
                                "label": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 37
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 37
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 37
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "switch (this.a) { c\\u0061se 6: break; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 17, end: 27

```

