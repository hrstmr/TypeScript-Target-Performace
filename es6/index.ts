import { data } from './data';

const world = 'world';

export function hello(who: string = world): string {
    data.abc = 'sdgbsd';
    return `Hello ${who}! `;
}
