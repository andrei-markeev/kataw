# Kataw parser test case

## Input

`````js
function f(){ "use strict"
 /* suffix = */ .foo; eval = 1; }
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
                            "kind": 120,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 44,
                                    "end": 47
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 13,
                                "end": 47
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 13,
                            "end": 48
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "eval",
                                    "rawText": "eval",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 53
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 53,
                                    "end": 55
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 57
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 48,
                                "end": 57
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 48,
                            "end": 58
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 58
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 60
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "function f(){ \"use strict\"\n /* suffix = */ .foo; eval = 1; }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
function f() {
  "\"use strict\""/* suffix = */ .foo;
  eval = 1;
}
```

### Diagnostics

```javascript
✔ No errors
```

