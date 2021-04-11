fluent-iterable - v0.1.0

# fluent-iterable - v0.1.0

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

▸ **getRememberedByClassFactory**(`create`: (`cls`: *AbstractClass*<unknown\>) => Remembered): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`create` | (`cls`: *AbstractClass*<unknown\>) => Remembered |

**Returns:** (`cls`: *AbstractClass*<unknown\>) => *Remembered*

___

### setupRemembered

▸ **setupRemembered**(`instanceGetter`: (`cls`: *AbstractClass*<Object\>) => Remembered): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`instanceGetter` | (`cls`: *AbstractClass*<Object\>) => Remembered |

**Returns:** *void*
