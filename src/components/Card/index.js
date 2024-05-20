import React from "react";

export default function Index(props) {
    let datos = props.datos;
    return (
        <>
            {
                datos.map((item, index) => (
                    <div key={index} className="flex flex-row mb-32">
                        <div className="w-2/5">
                            <img src={item.url} alt={item.name} style={{ width: "100px" }} />
                        </div>
                        <div className="w-2/5">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <p className="text-md">
                                {item.descripcion}
                            </p>
                            <p className="text-sm text-center">Descripcion corta</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}