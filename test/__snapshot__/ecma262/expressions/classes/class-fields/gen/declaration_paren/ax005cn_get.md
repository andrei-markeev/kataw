# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/declaration_paren
> :: test: declaration_paren
> :: case: a\n get
## Options

`````js
{}
`````
## Input

`````js
(class extends Base { a\n get });
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": {
                            "kind": 279,
                            "extendsKeyword": {
                                "kind": 4194391,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 14
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "typeParameter": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 19
                        },
                        "body": {
                            "kind": 303,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticKeyword": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 21,
                                    "end": 23
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 23
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 23
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 23
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "get",
                "rawText": "get",
                "flags": 96,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "(class extends Base { a\\n get });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 21, end: 23
✖ Invalid hexadecimal escape sequence - start: 23, end: 23
✖ The parser expected to find a '}' to match the '{' token here - start: 23, end: 24
✖ 'get' is not allowed here. Did you mean ';'? - start: 25, end: 29
✖ Declaration or statement expected - start: 29, end: 31
✖ Declaration or statement expected - start: 31, end: 32

```

