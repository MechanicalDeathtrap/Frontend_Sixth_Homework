declare module 'stats' {
    export function getMaxIndex<T>(input: T[], comparator:(x: T, y: T) => number): number;
    export function getMaxElement<T>(input: T[], comparator: (x: T, y: T) => number): T ;
    export function getMinIndex<T>(input: T[], comparator: (x: T, y: T) => number): number;
    export function getMinElement<T>(input: T[], comparator: (x: T, y: T) => number): T;
    export function getMedianIndex<T>(input: T[], comparator: (x: T, y: T) => number): number;
    export function getMedianElement<T>(input: T[], comparator: (x: T, y: T) => number): T;
    export function getAverageValue<T>(input: T[], comparator: (x: T, y: T) => number): number;
}
