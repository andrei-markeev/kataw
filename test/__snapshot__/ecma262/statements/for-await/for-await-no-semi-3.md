# Kataw parser test case

## Input

`````js
async function f() {
  for await (x = 0;false;);
}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 17,
                "end": 17
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 165,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 26
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 35
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 0,
                                    "rawText": "0",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 20,
                                "end": 39
                            },
                            "condition": {
                                "kind": 205586437,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 45
                            },
                            "incrementor": null,
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 48
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 48
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 48
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 50
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function f() {\n  for await (x = 0;false;);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
async function f() {
  for (x = 0; ; false);
}
```

### Diagnostics

```javascript
✔ No errors
```

