# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var \u0061bc = 5;
export { abc }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "abc",
                            "rawText": "\\u0061bc",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 12
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 16
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 81,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "abc",
                                "rawText": "abc",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 30
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 30
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 24,
                "end": 32
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 17,
            "transformFlags": 0,
            "start": 17,
            "end": 32
        }
    ],
    "isModule": true,
    "source": "var \\u0061bc = 5;\nexport { abc }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
var \u0061bc = 5;
export { abc  };

```

### Diagnostics

```javascript
✔ No errors
```

