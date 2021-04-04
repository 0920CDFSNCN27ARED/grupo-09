function SideMenuLink(props) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.link}>
                <i className= {props.icon}></i>
                <span>{props.title}</span>
            </a>
        </li>
    );
}

export default SideMenuLink;
