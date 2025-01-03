# Kataw parser test case

## Input

`````js
const obj = {
    async,
    *generator() {
    }
};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "async",
                                        "rawText": "async",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 23
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 201360950,
                                            "flags": 65,
                                            "transformFlags": 32,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "generator",
                                                "rawText": "generator",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 39
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 160,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 41
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 43
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 41,
                                                "end": 49
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 49
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 49
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 51
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 51
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 51
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "const obj = {\n    async,\n    *generator() {\n    }\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript
const obj = {
    async,
    *generator() {}
  };
```

### Diagnostics

```javascript
✔ No errors
```

