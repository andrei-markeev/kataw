# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let foo = async () => this
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 80,
                    "start": 6,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 135,
                                    "flags": 96,
                                    "start": 28,
                                    "end": 33
                                },
                                "flags": 288,
                                "start": 16,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 33
                        }
                    ],
                    "flags": 33554448,
                    "start": 10,
                    "end": 33
                },
                "flags": 33554448,
                "start": 6,
                "end": 33
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "export let foo = async () => this",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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
