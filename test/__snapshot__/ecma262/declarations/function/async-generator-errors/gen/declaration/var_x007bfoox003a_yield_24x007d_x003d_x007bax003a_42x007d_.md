# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: var {foo: yield 24} = {a: 42};
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {var {foo: yield 24} = {a: 42};}

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
            "asteriskToken": {
                "kind": 201360950,
                "flags": 64,
                "transformFlags": 32,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 21
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
                                "start": 24,
                                "end": 27
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "foo",
                                                            "rawText": "foo",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 29,
                                                            "end": 32
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "yield",
                                                            "rawText": "yield",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 39
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 39
                                                    },
                                                    {
                                                        "kind": 329,
                                                        "key": {
                                                            "kind": 201392130,
                                                            "text": 24,
                                                            "rawText": "24",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 42
                                                        },
                                                        "value": {
                                                            "kind": 16637,
                                                            "text": "",
                                                            "rawText": "",
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 42,
                                                            "end": 42
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 42
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 29,
                                                "end": 42
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 43
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 47,
                                                            "end": 48
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 42,
                                                            "rawText": "42",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 49,
                                                            "end": 52
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 47,
                                                        "end": 52
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 52
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 45,
                                            "end": 53
                                        },
                                        "flags": 16,
                                        "transformFlags": 4224,
                                        "start": 27,
                                        "end": 53
                                    }
                                ],
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 53
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 54
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 55
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "source": "async function * gen() {var {foo: yield 24} = {a: 42};}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'yield' cannot be used as an identifier here - start: 33, end: 39
✖ ',' expected - start: 39, end: 42
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 42, end: 43

```

