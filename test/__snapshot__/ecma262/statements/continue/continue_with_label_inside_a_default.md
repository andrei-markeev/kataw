# Kataw parser test case

## Input

`````js
switch (x) { default: continue foo; }
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 80,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 20
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 21
                        },
                        "statements": [
                            {
                                "kind": 172,
                                "continueKeyword": {
                                    "kind": 37757009,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 30
                                },
                                "label": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 30,
                                    "end": 34
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 35
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 35
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 12,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "switch (x) { default: continue foo; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only be used within an enclosing iteration statement. - start: 21, end: 30
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 21, end: 35

```

