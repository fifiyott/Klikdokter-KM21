import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubNavside = ({ icon, href, text }) => {
    return (
        <li>
            <FontAwesomeIcon
              icon={icon}
              size="1x"
              style={{ color: "white" }} />
            <a href={href}>{text}</a>
        </li>
    );
}
 
export default SubNavside;