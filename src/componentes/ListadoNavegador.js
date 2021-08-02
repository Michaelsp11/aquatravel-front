import { LinkNavegacion } from "./LinkNavegacion";
export const ListadoNavegador = (props) => {
  const { logueado, mobile, showNavItems } = props;
  return (
    <ul className={!mobile ? "list-inline m-0" : "list-unstyled text-right"}>
      <LinkNavegacion
        texto="Inicio"
        redireccion="/inicio"
        clase="text-dark"
        mobile={mobile}
        showNavItems={showNavItems}
      />
      <LinkNavegacion
        texto="Sobre Nosotros"
        redireccion="/about"
        clase="text-dark"
        mobile={mobile}
        showNavItems={showNavItems}
      />
      {!logueado ? (
        <LinkNavegacion
          texto="Iniciar Sesión"
          redireccion="/login"
          clase="color-link-page"
          mobile={mobile}
          showNavItems={showNavItems}
        />
      ) : (
        <>
          <LinkNavegacion
            texto="Bandeja de solicitudes"
            redireccion="/solicitudes"
            clase="text-dark"
            mobile={mobile}
            showNavItems={showNavItems}
          />
          <LinkNavegacion
            texto="Cerrar Sesión"
            redireccion="/logout"
            clase="color-link-page"
            mobile={mobile}
            showNavItems={showNavItems}
          />
        </>
      )}
    </ul>
  );
};
