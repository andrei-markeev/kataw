# Kataw parser test case

## Input

`````js
for (async of x);

async () => {
  for (async of x);
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 10
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 10,
                "end": 13
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 16,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 24
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 27,
                    "end": 30
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
                                    "start": 32,
                                    "end": 38
                                },
                                "awaitKeyword": null,
                                "initializer": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 45
                                },
                                "ofKeyword": {
                                    "kind": 16793717,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 45,
                                    "end": 48
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 50
                                },
                                "statement": {
                                    "kind": 168,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 51,
                                    "end": 52
                                },
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 52
                            }
                        ],
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 52
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 30,
                    "end": 54
                },
                "flags": 288,
                "transformFlags": 0,
                "start": 17,
                "end": 54
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 54
        }
    ],
    "isModule": false,
    "source": "for (async of x);\n\nasync () => {\n  for (async of x);\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a for...of loop cannot contain an 'async' identifier - start: 10, end: 13
✖ The left-hand side of a for...of loop cannot contain an 'async' identifier - start: 45, end: 48

```

