import Class from './Class';
import classMembers from './classMembers';
import classPrototypeMembers from './classPrototypeMembers';

let {prototype} = Class;
Object.assign(Class, classMembers);
Object.assign(prototype, classPrototypeMembers);

export default Class;
