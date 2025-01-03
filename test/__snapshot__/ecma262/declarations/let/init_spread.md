# Kataw parser test case

## Input

`````js
let x = ...y;
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 16637,
                            "text": "",
                            "rawText": "",
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "let x = ...y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 7, end: 11
✖ Lexical declaration expected - start: 7, end: 11

```

