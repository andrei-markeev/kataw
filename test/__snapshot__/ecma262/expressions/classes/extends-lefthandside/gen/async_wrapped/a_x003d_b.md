# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/async_wrapped
> :: test: async wrapped
> :: case: a = b
## Options

`````js
{}
`````
## Input

`````js
async function p(){
  class C extends a = b {}
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
                "text": "p",
                "rawText": "p",
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 37
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 39
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 39
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 29
                                },
                                "flags": 29,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 29
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 39
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 18,
                "end": 39
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 41,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 41,
            "end": 43
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 45,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 43,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function p(){\n  class C extends a = b {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 40, end: 41
✖ '{' is not allowed here. Did you mean ';'? - start: 43, end: 45
✖ Declaration or statement expected - start: 46, end: 48

```

