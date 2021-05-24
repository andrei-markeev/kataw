# Kataw parser test case

## Input

`````js
declare function foo(x: number, y: string): void;
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
            "kind": 176,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 22,
                            "end": 30
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 21,
                        "end": 30
                    },
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 34,
                                "end": 41
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 41
                        },
                        "initializer": null,
                        "flags": 32,
                        "start": 31,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 20,
                "end": 42
            },
            "contents": null,
            "typeParameters": null,
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 43,
                    "end": 48
                },
                "flags": 0,
                "start": 7,
                "end": 48
            },
            "flags": 16,
            "start": 7,
            "end": 48
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 48,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "declare function foo(x: number, y: string): void;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

function foo(x, y);

```

### Diagnostics

```javascript
✔ No errors
```
