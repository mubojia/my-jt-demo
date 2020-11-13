import Demo from '../pages/demo.json';
import Compile from '../compile';

export default [
    {
        path: '/Images',
        component: () => Compile(Demo),
    },
    {
        path: '/tacos',
        component: () => Compile(Demo),
    },
];