import {Button} from 'antd';

export default function Buttons (props) {
    return <Button>{props.text || 'Button'}</Button>
}