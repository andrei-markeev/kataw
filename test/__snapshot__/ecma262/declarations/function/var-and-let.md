# Kataw parser test case

## Input

`````js
function f(){ var x; let x; }
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
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 17
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 17,
                                        "end": 19
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 20
                        },
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 26
                            },
                            "flags": 33554448,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 29
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "function f(){ var x; let x; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate bindingidentifier 'x' - start: 24, end: 26

```

