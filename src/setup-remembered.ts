import { AbstractClass, Func } from 'is-this-a-pigeon';
import { Remembered } from 'remembered';
import { UseRemembered } from './use-remembered';

export function setupRemembered(
	instanceGetter: (cls: AbstractClass<Object>) => Remembered | undefined,
) {
	for (const item of UseRemembered) {
		const instance = instanceGetter(
			item.target.constructor as AbstractClass<Object>,
		);
		if (instance) {
			const previous = item.target[item.name as keyof typeof item.target].bind(
				item.target,
			);
			item.target[item.name as keyof typeof item.target] = instance.wrap(
				previous,
				item.args[0],
			) as Func;
		}
	}
}
