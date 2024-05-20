import React from 'react';
import Boton from '../Boton';

export default function InicioBanner(){
    return (
        <div className="flex flex-row m-5">
            <div className="mx-5 w-2/5">
                <img src="https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg"/>
            </div>
            <div className="m-5 w-2/5">
                <h2 className="text-3xl font-semibold">Titulo</h2>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ex a augue venenatis lobortis. Aenean 
                    dictum elementum dui et vestibulum. Quisque viverra diam vel metus volutpat dictum. Proin non pulvinar 
                    lectus. Nulla venenatis ullamcorper lacus, quis tincidunt purus suscipit vitae. Vivamus feugiat vestibulum 
                    hendrerit. Donec lacinia diam eget volutpat vestibulum. Etiam egestas rhoncus sem vel hendrerit. Nullam 
                    hendrerit metus ac odio pellentesque consectetur. Aliquam ut luctus risus. Morbi sit amet molestie libero, 
                    eget blandit sem.</p>
                <div className="m-5 w-2/5">
                    <Boton/>
                    <p className="text-sm text-center">Descripcion corta</p>
                </div>
            </div>
        </div>
    )
}