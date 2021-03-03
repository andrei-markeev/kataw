# Kataw parser test case

## Input

`````js
const C = class {
    #bar() {}
    foo() {
        this.#bar = console.log("should log this then throw");
    }
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "const C = class {\n    #bar() {}\n    foo() {\n        this.#bar = console.log(\"should log this then throw\");\n    }\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "C",
                                "rawText": "C",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 82483,
                                "name": null,
                                "typeParameters": null,
                                "classHeritage": null,
                                "implementClauses": null,
                                "members": {
                                    "kind": 50,
                                    "elements": [
                                        {
                                            "kind": 49,
                                            "isStatic": false,
                                            "isAbstract": false,
                                            "isReadOnly": false,
                                            "isOptional": false,
                                            "method": {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "#bar",
                                                    "rawText": "#bar",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 17,
                                                    "end": 26
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "isSetter": false,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 28,
                                                    "end": 31
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 17,
                                            "end": 31
                                        },
                                        {
                                            "kind": 49,
                                            "isStatic": false,
                                            "isAbstract": false,
                                            "isReadOnly": false,
                                            "isOptional": false,
                                            "method": {
                                                "kind": 16844946,
                                                "name": {
                                                    "kind": 196711,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 31,
                                                    "end": 39
                                                },
                                                "formalParameters": {
                                                    "kind": 90,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 40,
                                                    "end": 41
                                                },
                                                "isSetter": false,
                                                "isGetter": false,
                                                "contents": {
                                                    "kind": 91,
                                                    "functionStatementList": {
                                                        "kind": 94,
                                                        "statements": [
                                                            {
                                                                "kind": 2097233,
                                                                "expression": {
                                                                    "kind": 65550,
                                                                    "left": {
                                                                        "kind": 74424,
                                                                        "member": {
                                                                            "kind": 4260571,
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 43,
                                                                            "end": 56
                                                                        },
                                                                        "expression": {
                                                                            "kind": 131252,
                                                                            "text": "#bar",
                                                                            "rawText": "#bar",
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 524288,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 57,
                                                                            "end": 61
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 56,
                                                                        "end": 61
                                                                    },
                                                                    "operator": "=",
                                                                    "right": {
                                                                        "kind": 66091,
                                                                        "expression": {
                                                                            "kind": 74424,
                                                                            "member": {
                                                                                "kind": 196712,
                                                                                "text": "console",
                                                                                "rawText": "console",
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 63,
                                                                                "end": 71
                                                                            },
                                                                            "expression": {
                                                                                "kind": 196711,
                                                                                "text": "log",
                                                                                "rawText": "log",
                                                                                "flags": 65536,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "parent": null,
                                                                                "emitNode": null,
                                                                                "start": 72,
                                                                                "end": 75
                                                                            },
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 71,
                                                                            "end": 75
                                                                        },
                                                                        "typeArguments": null,
                                                                        "argumentList": {
                                                                            "kind": 3,
                                                                            "elements": [
                                                                                {
                                                                                    "kind": 67279,
                                                                                    "text": "should log this then throw",
                                                                                    "rawText": "should log this then throw",
                                                                                    "flags": 65536,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 76,
                                                                                    "end": 104
                                                                                }
                                                                            ],
                                                                            "trailingComma": false,
                                                                            "transformFlags": 0,
                                                                            "flags": 65536,
                                                                            "intersects": false,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 104,
                                                                            "end": 105
                                                                        },
                                                                        "flags": 65536,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 75,
                                                                        "end": 105
                                                                    },
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 43,
                                                                    "end": 105
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 43,
                                                                "end": 106
                                                            }
                                                        ],
                                                        "multiline": true,
                                                        "flags": 81920,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 43,
                                                        "end": 106
                                                    },
                                                    "flags": 81920,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 41,
                                                    "end": 112
                                                },
                                                "decorators": null,
                                                "type": null,
                                                "accessModifier": null,
                                                "typeParameters": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 39,
                                                "end": 112
                                            },
                                            "flags": 81920,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 31,
                                            "end": 112
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 17,
                                    "end": 114
                                },
                                "decorators": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1,
                                "parent": null,
                                "emitNode": null,
                                "start": 9,
                                "end": 114
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 5,
                            "end": 114
                        }
                    ],
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 5,
                    "end": 114
                },
                "flags": 65552,
                "intersects": false,
                "transformFlags": 769,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 114
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 114
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 114
}
```

### Printed


```javascript

const C = class {
    #bar() { }
    foo() {
        this.#bar = console.log("should log this then throw")
    }
};

```

### Diagnostics


```javascript
@{x2714}@ No errors
```
