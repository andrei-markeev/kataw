# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
function f() {
  class C {
    static {
      return;
    }
  }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
                                        {
                                            "kind": 305,
                                            "decorators": null,
                                            "declaredKeyword": null,
                                            "staticKeyword": {
                                                "kind": 8388716,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 37
                                            },
                                            "block": {
                                                "kind": 124,
                                                "block": {
                                                    "kind": 249,
                                                    "statements": [
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 81,
                                                                "transformFlags": 0,
                                                                "start": 39,
                                                                "end": 52
                                                            },
                                                            "expression": null,
                                                            "flags": 17,
                                                            "transformFlags": 256,
                                                            "start": 39,
                                                            "end": 53
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 53
                                                },
                                                "flags": 26,
                                                "transformFlags": 0,
                                                "start": 0,
                                                "end": 59
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 59
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 59
                                },
                                "flags": 24,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 63
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 63
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 63
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 65
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        }
    ],
    "isModule": false,
    "source": "function f() {\n  class C {\n    static {\n      return;\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'return' statement cannot be used inside class static block. - start: 39, end: 52

```

