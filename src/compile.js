import asyncComponent from './asyncComponent';

export default function Compile(props) {

    const componentName = props[0].component;

    const Component = asyncComponent(() => import(`./compennts/${componentName}`));

    return <Component {...props} />;
   
}
