# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/class-fields/gen/declaration_paren
> :: test: declaration_paren
> :: case: await = 0;
## Options

`````js
{}
`````
## Input

`````js
(class extends Base { await = 0; });
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
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 21,
                                    "end": 31
                                },
                                {
                                    "kind": 1108353041,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 32
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 32
                        },
                        "flags": 6,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 34
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "(class extends Base { await = 0; });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
(class extends Base {
    await = 0;;
  });
```

### Diagnostics

```javascript
✔ No errors
```

