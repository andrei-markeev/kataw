# Kataw parser test case

## Input

`````js
async function f(){
  for await ((x)=>{} of y);
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
                            "kind": 167,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 25
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 31
                            },
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 34,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 34,
                                    "end": 36
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 38
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 40
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 43
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 43,
                                "end": 45
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 46,
                                "end": 47
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 47
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 47
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 49
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await ((x)=>{} of y);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...of' statement must be a variable or a property access. - start: 43, end: 45

```

