# Kataw parser test case

## Input

`````js
export var [foo] = arr, [bar] = arr2;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 10
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 15
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 15
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 16
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 10,
                            "end": 22
                        },
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 201,
                                "elementList": {
                                    "kind": 324,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 29
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr2",
                                "rawText": "arr2",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 23,
                            "end": 36
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 36
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 6,
                "end": 37
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "export var [foo] = arr, [bar] = arr2;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `export` keyword can only be used with the module goal - start: 0, end: 6

```

