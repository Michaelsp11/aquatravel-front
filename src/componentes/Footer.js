import { AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
export const Footer = () => {
    return (
            <div className="contenedorFooter py-2 position-relative box">
                <div className="container both">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 d-flex justify-content-around">
                            <div className="iconoFooter">< AiFillGithub /></div>
                            <div className="iconoFooter">< AiOutlineTwitter /></div>
                            <div className="iconoFooter">< AiOutlineInstagram /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col copyright">
                            <p className="text-center"><small className="text-black-50">© 2021. Todos los derechos inventados.</small></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};
