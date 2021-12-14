import React from 'react'
import  Logo from '../../assets/imagenes/DrSimi.jpg'
import Sm from '../../assets/imagenes/sm.png'
import '../../components/inicio/inicio.css'
export default function index() {
    return (
        

            <div >

<h2 className="superior"> Farmacias Similares </h2>
            
        <div className='Padre total'> 
         <div className='Madre col-6 total'>
           <img className="imagen_central" src={Logo} alt="" />  
        </div>

         <div className='derecho col-6 total'>
             <div>
                <h2 class="">¿Quienes somos?  </h2><br/>
               <img class="imagen" src={Sm} alt=""/> 
             </div>
             <br/>
               <div className="vision">
                    <h4>Vision</h4>  
               </div>
              <div className="vision">
                                <p > Ofrecer a la humanidad, conforme con nuestra mística, productos y servicios de salud integral con los más altos estándares de calidad y al precio más justo para ayudar a los que menos tienen. </p>
                <br />
               <h3 class="mision">Mision</h3>
               <hr />
                    <p 
                    >Ofrecer a la humanidad, conforme con nuestra mística, productos y servicios de salud integral con los más altos estándares de calidad y al precio más justo para ayudar a los que menos tienen.</p> 
              </div>

             </div>
         </div> 
            </div>
    )
}


