# Kataw parser test case

## Input

`````js
opaque type Counter: Box<T> = Container<T>;
`````


## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 312,
            "declareToken": null,
            "opaqueToken": {
                "kind": 24822,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 11
            },
            "name": {
                "kind": 134299649,
                "text": "Counter",
                "rawText": "Counter",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 19
            },
            "typeParameters": null,
            "superType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Box",
                        "rawText": "Box",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 24
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 26
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 25,
                        "end": 26
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 27
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 20,
                "end": 27
            },
            "impltype": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 144,
                    "typeName": {
                        "kind": 134299649,
                        "text": "Container",
                        "rawText": "Container",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 39
                    },
                    "typeParameters": {
                        "kind": 310,
                        "types": [
                            {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "T",
                                        "rawText": "T",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "transformFlags": 512,
                        "start": 40,
                        "end": 41
                    },
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 42
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 29,
                "end": 42
            },
            "flags": 2097152,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "opaque type Counter: Box<T> = Container<T>;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
opaque type Counter: Box<T> = Container<T>;
```

### Diagnostics

```javascript
✔ No errors
```

