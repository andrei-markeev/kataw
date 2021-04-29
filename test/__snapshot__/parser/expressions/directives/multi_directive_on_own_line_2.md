# Kataw parser test case

## Input

`````js
function f(){
'foo';
'bar';
}
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [
                        {
                            "kind": 201392131,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 4194401,
                            "start": 13,
                            "end": 19
                        },
                        {
                            "kind": 201392131,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 4194401,
                            "start": 20,
                            "end": 26
                        }
                    ],
                    "statements": [],
                    "multiline": true,
                    "flags": 32,
                    "start": 13,
                    "end": 27
                },
                "flags": 32,
                "start": 12,
                "end": 29
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "text": "function f(){\n'foo';\n'bar';\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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
