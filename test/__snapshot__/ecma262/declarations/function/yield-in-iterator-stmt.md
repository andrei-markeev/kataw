# Kataw parser test case

## Input

`````js
function* g() {
  for (yield '' in {}; ; ) ;
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 11
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 166,
                            "forKeyword": {
                                "kind": 37757017,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "initializer": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 28
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "",
                                    "rawText": "''",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 28,
                                    "end": 31
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 23,
                                "end": 31
                            },
                            "inKeyword": {
                                "kind": 21006388,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 34
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 36
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 34,
                                "end": 37
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 38
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 38
                        },
                        {
                            "kind": 168,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 40
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 40
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 40
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 42,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function* g() {\n  for (yield '' in {}; ; ) ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use the 'yield' keyword on the left-hand side of a 'for...in' statement in a generator context - start: 23, end: 31
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 34, end: 36
✖ Expected a ')' to match the '(' token here - start: 37, end: 38
✖ The parser expected to find a '}' to match the '{' token here - start: 41, end: 42
✖ Declaration or statement expected - start: 44, end: 46

```

