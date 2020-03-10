import classMembers from './classMembers';
import classPrototypeMembers from './classPrototypeMembers';

let Class = class {};
let {prototype} = Class;
Object.assign(Class, classMembers);
Class.default = Class.from();
Object.assign(prototype, classPrototypeMembers);

export default Class;
