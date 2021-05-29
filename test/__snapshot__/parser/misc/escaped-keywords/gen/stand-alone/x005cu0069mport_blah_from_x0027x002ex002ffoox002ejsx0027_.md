# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/misc/escaped-keywords/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\escaped-keywords\gen\stand-alone
> :: test: stand-alone
> :: case: \u0069mport blah from './foo.js';
## Input

`````js
\u0069mport blah from './foo.js';
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 16464,
                "start": 0,
                "end": 11
            },
            "fromClause": {
                "kind": 256,
                "fromKeyword": {
                    "kind": 16500,
                    "flags": 64,
                    "start": 16,
                    "end": 21
                },
                "from": {
                    "kind": 201392131,
                    "text": "./foo.js",
                    "rawText": "'./foo.js'",
                    "flags": 4194400,
                    "start": 21,
                    "end": 32
                },
                "flags": 0,
                "start": 16,
                "end": 32
            },
            "moduleSpecifier": null,
            "importClause": {
                "kind": 262,
                "defaultBinding": {
                    "kind": 134299649,
                    "text": "blah",
                    "rawText": "blah",
                    "flags": 96,
                    "start": 11,
                    "end": 16
                },
                "nameSpaceImport": null,
                "namedImports": null,
                "flags": 16,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "\\u0069mport blah from './foo.js';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Keywords cannot contain escape characters - start: 0, end: 11
✖ The `import` keyword can only be used with the module goal - start: 32, end: 33

```
