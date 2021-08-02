import { NavLink } from "react-router-dom";
export const LinkNavegacion = (props) => {
  const { texto, redireccion, clase, mobile, showNavItems } = props;
  return (
    <li className={!mobile ? "list-inline-item" : ""}>
      <NavLink
        to={redireccion}
        activeClassName="actual"
        className={clase}
        onClick={showNavItems}
      >
        {texto}
      </NavLink>
    </li>
  );
};
