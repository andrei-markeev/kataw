# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: async function f() { for await (var x of xs); }
## Options

`````js
{}
`````
## Input

`````js
async function f() { for await (var x of xs); }
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
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 24
                            },
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 30
                            },
                            "initializer": {
                                "kind": 341,
                                "varKeyword": {
                                    "kind": 37757002,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 35
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
                                                "start": 35,
                                                "end": 37
                                            },
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "transformFlags": 4224,
                                            "start": 35,
                                            "end": 37
                                        }
                                    ],
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 37
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 40
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 40
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "xs",
                                "rawText": "xs",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 43
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 45
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 45
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 47
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "async function f() { for await (var x of xs); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
async function f() {
  for await (var x of xs);
}
```

### Diagnostics

```javascript
✔ No errors
```

