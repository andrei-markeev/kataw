# Kataw parser test case

## Input

`````js
function f(){   return
return   }
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 22
                            },
                            "expression": null,
                            "flags": 16,
                            "transformFlags": 256,
                            "start": 13,
                            "end": 22
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 29
                            },
                            "expression": null,
                            "flags": 17,
                            "transformFlags": 256,
                            "start": 22,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function f(){   return\nreturn   }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
function f() {
  return;
  return;
}
```

### Diagnostics

```javascript
✔ No errors
```

