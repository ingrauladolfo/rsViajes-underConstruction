import Link from 'next/link'
import Image from 'next/image'
import phone from '../assets/img/phone.png'
import map from '../assets/img/address.png'
import facebook from '../assets/img/face.png'
import twitter from '../assets/img/twit.png'
import instagram from '../assets/img/insta.png'
const Footer = () => {
    return (
        <>
            <footer id="footer" className="text-center container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 mt-4">
                            <div className="corp-footer">
                                <Link  href="tel:+521(443)5203984">
                                    <a target="_blank">
                                    <Image src={phone} width={30}
                                height={30} alt="Phone" />
                                    <div className="phone-footer">
                                    (443)5203984   
                                    </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-4">
                            <div className="corp-footer">
                                <Image src={map} width={30}
                                height={30} alt="Map" className="icon-footer" />
                                <div>Bernal Díaz del Castillo #130-B Chapultepec Sur</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 mt-4">
                            <div className="social-footer flex-center mb-5">
                            <Link href="https://facebook.com/franquiciasrsviajes" >
                                <a target="_blank">
                                <Image src={facebook}
                                width={30}
                                height={30}
                                className="icon-footer mr-md-5 mr-5" alt="RS Viajes Facebook" />
                                </a>
                            </Link>
                            <Link href="https://twitter.com/franquiciasRS">
                                <a target="_blank">
                                    <Image src={twitter} width={30}
                                height={30} alt="RS Viajes Twitter" className="icon-footer mr-md-5 mr-5" />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/franquiciasrsviajes/">
                                <a target="_blank">
                                    <Image src={instagram} width={30}
                                height={30} alt="RS Viajes Instagram" className="icon-footer mr-md-5 mr-5" />
                                </a>
                            </Link>
                            <div className="text-center">Síguenos en nuestras redes sociales</div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12 mt-2 mb-4">
                            <div className="text-center">
                                <p className="lead">
                                © 2020 | RS Viajes Empresas Turísticas S.A. de C.V. | Todos los derechos reservados
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export default Footer