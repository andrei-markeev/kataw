# Kataw parser test case

## Input

`````js
function foo<T,S>() {}
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 17,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 32,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 19,
                "end": 22
            },
            "typeParameters": {
                "kind": 146,
                "types": [
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 13,
                        "end": 14
                    },
                    {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "S",
                            "rawText": "S",
                            "flags": 96,
                            "start": 15,
                            "end": 16
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 15,
                        "end": 16
                    }
                ],
                "flags": 0,
                "start": 12,
                "end": 17
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "function foo<T,S>() {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
