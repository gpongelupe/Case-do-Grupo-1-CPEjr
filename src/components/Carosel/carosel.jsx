import React, {useEffect} from "react";
import Glide from "@glidejs/glide"
import {Carousel} from "antd"

//configuração do css automatico
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const config = {
    //configurando os slides
    type: "carousel",
    startAt: 0, 
    perView: 1
};

const slides = [
    {
        href:"https://www.clickjogos.com.br/_next/image?url=http%3A%2F%2Fcj.ibxk.com.br%2F2023%2F02%2F02%2F02145406549003.png&w=2048&q=75" //link da imagem 
    }, 
    {
        href:"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft"// link da imagem 
    }
]

const Carrosel = () => {
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    const contentStyle = {
        margin: 0,
        width:'100%',
        height: '307px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      
      return (
        <Carousel afterChange={onChange}>
          <div>
            <img style={contentStyle} src="https://www.clickjogos.com.br/_next/image?url=http%3A%2F%2Fcj.ibxk.com.br%2F2023%2F02%2F02%2F02145406549003.png&w=2048&q=75"/>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      );

    // const slider = new Glide (".glide", config);

    // useEffect(()=>{
    //     return ()=>{slider.mount}
    // }, [slider])


        // return ( 
        //     <div className="glide">
        //         <div className="glide__track" data-glide-el="track">
        //             <ul className="glide__slides">
        //                 {slides.map((e, index) => {
        //                     return (
        //                     <li className="glide__slide" key={index}>
        //                         <img src={e.href}></img>
        //                         <p>hello world</p>
        //                     </li>
        //                     );
        //                 }) }
        //             </ul>
        //         </div> 
        //         <div className="glide__arrows" data-glide-el="controls">
        //             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
        //                     <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        //                 </svg>
        //             </button>
        //             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
        //                     <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>
        // );

        // return (
        //     <Carousel>
        //         {slides.map((e, index) => {
        //             return (
        //             <div key={index}>
        //                 <img src={e.href}></img>
        //                 <p>hello world</p>
        //             </div>
        //             );
        //         }) }
        //     </Carousel>
        // );
}
export default Carrosel;