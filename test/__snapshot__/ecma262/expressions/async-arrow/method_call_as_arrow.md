# Kataw parser test case

## Input

`````js
async ({ident: [foo, bar].join("")}) => x
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "ident",
                                            "rawText": "ident",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 13
                                        },
                                        "right": {
                                            "kind": 131,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 119,
                                                    "elementList": {
                                                        "kind": 270,
                                                        "elements": [
                                                            {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 16,
                                                                "end": 19
                                                            },
                                                            {
                                                                "kind": 134299649,
                                                                "text": "bar",
                                                                "rawText": "bar",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 20,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 24
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 8,
                                                    "start": 14,
                                                    "end": 25
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "join",
                                                    "rawText": "join",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "flags": 32,
                                                "transformFlags": 2,
                                                "start": 8,
                                                "end": 30
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 201392131,
                                                        "text": "",
                                                        "rawText": "\"\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 31,
                                                        "end": 33
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "flags": 32,
                                            "transformFlags": 1,
                                            "start": 8,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 8,
                                        "end": 34
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 34
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 35
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 34,
                "transformFlags": 1,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 39,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 39,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "async ({ident: [foo, bar].join(\"\")}) => x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '=>' is not allowed here. Did you mean ';'? - start: 36, end: 39

```

