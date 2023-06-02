import React, {useEffect} from "react";
// import Glide from "@glidejs/glide"
import {Carousel} from "antd"
import Foto1 from "./ima2.webp"
import Foto2 from "./mine.jpg"
import Foto3 from "./noticias.jpg"
//configuração do css automatico
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const config = {
    //configurando os slides
    type: "carousel",
    startAt: 0, 
    perView: 1
};


const Carrosel = () => {
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const contentStyle = {
/*         marginLeft: '10%', */
        width:'100%',
        height: '100%',
        color: '#fff',
        lineHeight: '160px',
        contentAlign: 'center',
      };

      return (
        <Carousel afterChange={onChange}>
          <div>
            <img style={contentStyle} src={Foto3}/>
          </div>
          <div>
            <img style={contentStyle} src= {Foto2}/> 
          </div>
          <div>
            <img style={contentStyle}src= {Foto1}/>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      );


}
export default Carrosel;