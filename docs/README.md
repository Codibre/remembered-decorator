fluent-iterable - v0.1.1

# fluent-iterable - v0.1.1

## Table of contents

### Variables

- [UseRemembered](README.md#useremembered)

### Functions

- [getRememberedByClassFactory](README.md#getrememberedbyclassfactory)
- [setupRemembered](README.md#setupremembered)

## Variables

### UseRemembered

• `Const` **UseRemembered**: *IterableMethodDecorator*<[getKey: Func<Args, any\>]\>

## Functions

### getRememberedByClassFactory

▸ **getRememberedByClassFactory**(`create`: (`cls`: *AbstractClass*<unknown\>) => Remembered \| *undefined*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`create` | (`cls`: *AbstractClass*<unknown\>) => Remembered \| *undefined* |

**Returns:** (`cls`: *AbstractClass*<unknown\>) => *undefined* \| *Remembered*

___

### setupRemembered

▸ **setupRemembered**(`instanceGetter`: (`cls`: *AbstractClass*<Object\>) => Remembered \| *undefined*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`instanceGetter` | (`cls`: *AbstractClass*<Object\>) => Remembered \| *undefined* |

**Returns:** *void*
