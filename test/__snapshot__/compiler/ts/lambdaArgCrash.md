# Kataw parser test case

## Input

`````js
// @lib: es5
class Event {

@{x9}@ private _listeners: any[] = [];

@{x9}@ constructor () {

@{x9}@@{x9}@ // TODO: remove

@{x9}@@{x9}@ this._listeners = [];

@{x9}@}

@{x9}@ add(listener: () => any): void {

@{x9}@@{x9}@ /// <summary>Registers a new listener for the event.</summary>

@{x9}@@{x9}@ /// <param name="listener">The callback function to register.</param>

@{x9}@@{x9}@ this._listeners.push(listener);

@{x9}@}

}

class ItemSetEvent extends Event {

@{x9}@ add(listener: (items: ItemSet) => void ) {

@{x9}@ @{x9}@super.add(listener);

@{x9}@}

}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "// @lib: es5\nclass Event {\n\n\t private _listeners: any[] = [];\n\n\t constructor () {\n\n\t\t // TODO: remove\n\n\t\t this._listeners = [];\n\n\t}\n\n\t add(listener: () => any): void {\n\n\t\t /// <summary>Registers a new listener for the event.</summary>\n\n\t\t /// <param name=\"listener\">The callback function to register.</param>\n\n\t\t this._listeners.push(listener);\n\n\t}\n\n}\n\nclass ItemSetEvent extends Event {\n\n\t add(listener: (items: ItemSet) => void ) {\n\n\t \tsuper.add(listener);\n\n\t}\n\n}\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Event",
                    "rawText": "Event",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 18,
                    "end": 24
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "_listeners",
                                "rawText": "_listeners",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 37,
                                "end": 48
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 7,
                                "elementType": {
                                    "kind": 4194306,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 49,
                                    "end": 53
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 49,
                                "end": 57
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 57,
                                "end": 60
                            },
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 26,
                                "end": 37
                            },
                            "isStatic": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 524352,
                            "parent": null,
                            "emitNode": null,
                            "start": 26,
                            "end": 61
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 61,
                                    "end": 76
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
                                    "start": 78,
                                    "end": 79
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
                                                            "start": 81,
                                                            "end": 110
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "_listeners",
                                                            "rawText": "_listeners",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 111,
                                                            "end": 121
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 110,
                                                        "end": 121
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 67207686,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 125,
                                                            "end": 125
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 123,
                                                        "end": 126
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 81,
                                                    "end": 126
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 81,
                                                "end": 127
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 81,
                                        "end": 127
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 79,
                                    "end": 131
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 327680,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 76,
                                "end": 131
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 61,
                            "end": 131
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
                                    "text": "add",
                                    "rawText": "add",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 131,
                                    "end": 138
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "listener",
                                                "rawText": "listener",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 139,
                                                "end": 147
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 95,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 175,
                                                    "parameterList": [],
                                                    "trailingcomma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 150,
                                                    "end": 150
                                                },
                                                "returnType": {
                                                    "kind": 4194306,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 154,
                                                    "end": 158
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 148,
                                                "end": 158
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 139,
                                            "end": 158
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 139,
                                    "end": 159
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
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 74424,
                                                        "member": {
                                                            "kind": 74424,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 167,
                                                                "end": 317
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "_listeners",
                                                                "rawText": "_listeners",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 318,
                                                                "end": 328
                                                            },
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 317,
                                                            "end": 328
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "push",
                                                            "rawText": "push",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 329,
                                                            "end": 333
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 328,
                                                        "end": 333
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 196712,
                                                                "text": "listener",
                                                                "rawText": "listener",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 334,
                                                                "end": 342
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 342,
                                                        "end": 343
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 333,
                                                    "end": 343
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 167,
                                                "end": 344
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 167,
                                        "end": 344
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 165,
                                    "end": 348
                                },
                                "decorators": null,
                                "type": {
                                    "kind": 4194550,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 160,
                                    "end": 165
                                },
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 138,
                                "end": 348
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 131,
                            "end": 348
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 26,
                    "end": 351
                },
                "decorators": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 351
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "ItemSetEvent",
                    "rawText": "ItemSetEvent",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 358,
                    "end": 371
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 196712,
                        "text": "Event",
                        "rawText": "Event",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 379,
                        "end": 385
                    },
                    "typeArguments": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 379,
                    "end": 385
                },
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
                                    "text": "add",
                                    "rawText": "add",
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 387,
                                    "end": 394
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "listener",
                                                "rawText": "listener",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 395,
                                                "end": 403
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 95,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 175,
                                                    "parameterList": [
                                                        {
                                                            "kind": 174,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "items",
                                                                "rawText": "items",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 406,
                                                                "end": 411
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 236,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "ItemSet",
                                                                    "rawText": "ItemSet",
                                                                    "flags": 65536,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 412,
                                                                    "end": 420
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 412,
                                                                "end": 421
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 406,
                                                            "end": 420
                                                        }
                                                    ],
                                                    "trailingcomma": false,
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 406,
                                                    "end": 420
                                                },
                                                "returnType": {
                                                    "kind": 4194550,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 424,
                                                    "end": 429
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 404,
                                                "end": 429
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 395,
                                            "end": 429
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 395,
                                    "end": 431
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
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 74424,
                                                        "member": {
                                                            "kind": 4260561,
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 433,
                                                            "end": 443
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "add",
                                                            "rawText": "add",
                                                            "flags": 65536,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "parent": null,
                                                            "emitNode": null,
                                                            "start": 444,
                                                            "end": 447
                                                        },
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 443,
                                                        "end": 447
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 196712,
                                                                "text": "listener",
                                                                "rawText": "listener",
                                                                "flags": 65536,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 448,
                                                                "end": 456
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 456,
                                                        "end": 457
                                                    },
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 447,
                                                    "end": 457
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 433,
                                                "end": 458
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 433,
                                        "end": 458
                                    },
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 431,
                                    "end": 462
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
                                "start": 394,
                                "end": 462
                            },
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 387,
                            "end": 462
                        }
                    ],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 387,
                    "end": 465
                },
                "decorators": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 351,
                "end": 465
            }
        ],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 465
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
    "end": 466
}
```

### Printed


```javascript

class Event {
    private _listeners: any[] = [];
    constructor() {
        this._listeners = []
    }
    add(listener: () => any): void {
        this._listeners.push(listener)
    }
}

class ItemSetEvent extends Event {
    add(listener: (items: ItemSet) => void) {
        super.add(listener)
    }
}

```

### Diagnostics


```javascript
@{x2714}@ No errors
```
