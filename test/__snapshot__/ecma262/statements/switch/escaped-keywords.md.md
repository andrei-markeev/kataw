# Kataw parser test case

## Input

`````js
switch (this.a) { d\u0065fault: break; }

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
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 16464,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 30
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 31
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 37
                                },
                                "label": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 38
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 38
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        },
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 81,
                "transformFlags": 0,
                "start": 40,
                "end": 48
            },
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 4276321,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 54
                },
                "expression": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 56
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 50,
                "end": 56
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
                            "start": 59,
                            "end": 69
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 6,
                            "rawText": "6",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 71
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 71,
                            "end": 72
                        },
                        "statements": [
                            {
                                "kind": 150,
                                "breakKeyword": {
                                    "kind": 37757005,
                                    "flags": 80,
                                    "transformFlags": 0,
                                    "start": 72,
                                    "end": 78
                                },
                                "label": null,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 72,
                                "end": 79
                            }
                        ],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 79
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 59,
                "end": 79
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 40,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "switch (this.a) { d\\u0065fault: break; }\n\nswitch (this.a) { c\\u0061se 6: break; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 17, end: 30
✖ Keywords cannot contain escape characters - start: 59, end: 69

```

