import Image from 'next/image'
import logo from '../assets/img/logo.png'

const Main = () => {
    return (
        <header id="main">
        <div className="container">
            <div className="row general">
                <div className="col d-flex justify-content-center align-items-center mx-auto">
                    <Image src={logo} 
                        width={150}
                        height={150}
                    />
                </div>
                <h1 className="text-center mensaje ">Sitio en remodelación</h1>
            </div>
        </div>
    </header> 
    )
}
export default Main