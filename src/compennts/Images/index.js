import { Link } from "react-router-dom"

export default function Images(propsData) {
    const props = propsData[0];
    return <div>
        {
            Object.keys(props).length ? (
                <div>
                    <Link to={props.text.link} >
                        <img src={props.url} alt="" />
                    </Link>
                    <Link to={props.text.link} >{props.text.title}</Link>
                </div>
            ) : null
        }
    </div>
}
