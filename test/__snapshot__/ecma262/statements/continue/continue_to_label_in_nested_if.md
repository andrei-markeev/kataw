# Kataw parser test case

## Input

`````js
foo: while (true) if (x) continue foo;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "statement": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 80,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 23
                    },
                    "consequent": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 33
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 37
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 38
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 38
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 4,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "foo: while (true) if (x) continue foo;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
foo:  while (true) if (x) continue foo;
```

### Diagnostics

```javascript
✔ No errors
```

