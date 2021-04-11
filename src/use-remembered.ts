import { createMethodDecorator } from 'decorator-builder';
import { Func } from 'is-this-a-pigeon';

export const UseRemembered = createMethodDecorator<(getKey: Func) => void>();
