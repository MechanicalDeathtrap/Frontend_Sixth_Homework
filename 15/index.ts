/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

export class ObjectManipulator<T>{

    constructor(protected obj: T) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get<T1 extends keyof T>(key: T1) : T[T1] {
        return this.obj[key];
    }

    public delete<T1 extends keyof T>(key: T1) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() : T {
        return this.obj;
    }
}
