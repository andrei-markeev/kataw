# Kataw parser test case

## Input

`````js
do if(8)function s(){}
while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 201392130,
                    "text": 8,
                    "rawText": "8",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 7
                },
                "consequent": {
                    "kind": 176,
                    "declareKeyword": null,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 16
                    },
                    "asteriskToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "s",
                        "rawText": "s",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 19
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "returnType": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 22
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 22
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 22,
                "end": 28
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 29,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "do if(8)function s(){}\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
do  if (8) function s() {}
while (y);
```

### Diagnostics

```javascript
✔ No errors
```

