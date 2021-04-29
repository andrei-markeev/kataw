# Kataw parser test case

## Input

`````js
const q
/d/
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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 7
            },
            "flags": 33554448,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 7,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 11,
                    "end": 11
                },
                "flags": 32,
                "start": 7,
                "end": 11
            },
            "flags": 16,
            "start": 7,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "const q\n/d/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Missing initializer in const declaration - start: 7, end: 9
✖ Expression expected - start: 7, end: 9
✖ Expression expected - start: 11, end: 11

```
