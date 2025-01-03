# Kataw parser test case

## Input

`````js
declare class A { static [ indexer: number]: string }
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
            "kind": 178,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 24
                            },
                            "key": {
                                "kind": 134299649,
                                "text": "indexer",
                                "rawText": "indexer",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 34
                            },
                            "value": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 42
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 42
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 51
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 51
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 51
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 53
                },
                "flags": 4128,
                "transformFlags": 0,
                "start": 15,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "declare class A { static [ indexer: number]: string }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
declare class A { static [indexernumber]: string }
```

### Diagnostics

```javascript
✔ No errors
```

