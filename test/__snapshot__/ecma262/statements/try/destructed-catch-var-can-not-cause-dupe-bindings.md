# Kataw parser test case

## Input

`````js
try {} catch ([a,a]) { }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 12
                },
                "catchParameter": {
                    "kind": 201,
                    "elementList": {
                        "kind": 324,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 16
                            },
                            {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 19
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 24
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 6,
                "end": 24
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "try {} catch ([a,a]) { }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate bindingidentifier 'a' - start: 17, end: 18

```

