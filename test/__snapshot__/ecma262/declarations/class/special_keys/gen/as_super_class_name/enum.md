# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/gen/as_super_class_name
> :: test: as super class name
> :: case: enum
## Options

`````js
{}
`````
## Input

`````js
class x extends enum {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
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
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "enum",
                        "rawText": "enum",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 20
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 20
                },
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 22
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "class x extends enum {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
class x extends enum {}
```

### Diagnostics

```javascript
✔ No errors
```

