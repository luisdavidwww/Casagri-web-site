import { useState, useEffect } from "react";

//componentes
import { Accordion } from "../elements/Accordion";
import { Radio } from "../elements/Radio";
import { CheckBox } from "../elements/CheckBox";
import Slider, { createSliderWithTooltip } from "rc-slider";

//Estilos
import "rc-slider/assets/index.css";

//datos
import { CATEGORIAS, MARCA, DESCUENTO, PRICE_RANGE } from "../../data/filters";

export const FiltersBar = () => {

    const [selectedFilters, setSelectedFilters] = useState({});


    return (
        <div className="m-4 border-r px-3 border-slate-300">
            <div className="flex pb-2 justify-between border-b border-slate-300">
                <div className="flex items-center">
                    <span className="px-2">Filtros</span>
                </div>
                <button className="mx-2" >Limpiar Todo</button>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Categoria">
                    {
                        CATEGORIAS.map((category, index) => {
                            return (
                                <CheckBox key={index} label={category.name}/>
                            )
                        })
                    }
                </Accordion>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Marca">
                    {
                        MARCA.map((category, index) => {
                            return (
                                <CheckBox key={index} label={category.name}  />
                            )
                        })
                    }
                </Accordion>
            </div>
            <div className="flex pb-2 flex-col justify-between border-b border-slate-300">
                <Accordion label="Descuentos">
                    {
                        DESCUENTO.map((descuento, index) => {
                            return (
                                <Radio key={index} label={descuento.name} name="descuento" />
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}