# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {bar}, * as foo from 'bar';
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": null,
            "namedExports": {
                "kind": 266,
                "exportsList": {
                    "kind": 289,
                    "specifiers": [
                        {
                            "kind": 291,
                            "moduleExportName": null,
                            "name": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "asKeyword": null,
                            "binding": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 11
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 6,
                "end": 12
            },
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 201360950,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 13,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "as",
                    "rawText": "as",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 13,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 18,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 18,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 22,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "bar",
                "rawText": "'bar'",
                "flags": 4194400,
                "transformFlags": 0,
                "start": 27,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 34
        }
    ],
    "isModule": true,
    "source": "export {bar}, * as foo from 'bar';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' is not allowed here. Did you mean ';'? - start: 12, end: 13
✖ Identifier expected - start: 13, end: 15
✖ '; ' is not allowed here. Did you mean ';'? - start: 18, end: 22
✖ 'from' is not allowed here. Did you mean ';'? - start: 22, end: 27
✖ '; ' is not allowed here. Did you mean ';'? - start: 27, end: 33

```

