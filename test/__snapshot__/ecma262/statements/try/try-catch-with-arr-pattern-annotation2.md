# Kataw parser test case

## Options

`````js
{ allowTypes : true }
`````

## Input

`````js
try {} catch([a:string]: number) {}
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
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 22
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "right": null,
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "trailingComma": false,
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 23
                },
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 6,
                "end": 23
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 31
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 34,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "try {} catch([a:string]: number) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Catch clause variable cannot have an type annotation - start: 23, end: 24
✖ ')' is not allowed here. Did you mean ';'? - start: 31, end: 32

```

