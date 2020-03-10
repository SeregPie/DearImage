import classMembers from './classMembers';
import classPrototypeMembers from './classPrototypeMembers';

let Class = class {};
let {prototype} = Class;
Object.assign(Class, classMembers);
Object.assign(prototype, classPrototypeMembers);

export default Class;
