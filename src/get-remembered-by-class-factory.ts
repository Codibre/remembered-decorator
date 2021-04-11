import { AbstractClass } from 'is-this-a-pigeon';
import { Remembered } from 'remembered';

const map = new Map<AbstractClass<unknown>, Remembered>();

export function getRememberedByClassFactory(
	create: (cls: AbstractClass<unknown>) => Remembered,
) {
	return (cls: AbstractClass<unknown>) => {
		let result = map.get(cls);
		if (!result) {
			result = create(cls);
			map.set(cls, result);
		}
		return result;
	};
}
