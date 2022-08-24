import "./ItemListContain.css"
import remeraRipcurl from './../../../src/remera ripcurl.jpg'
import remeraVans from './../../../src/remera vans.jpg'


const Items = () =>{
    return(
        <div  classNameName="col d-flex justify-content-space-around-between">
                <div id="productos">

                    <div>
                        <div>
                            <img id="imagen1" src= {remeraRipcurl}/>
                            <div id="producto1">
                                <h4 className="">Remera Ripcurl F</h4>
                            </div>

                            <div id="productouno">

                                <label for="talles">Talles:</label>

                                <select name="talles" id="talles">
                                    <option id="XL">XL</option>
                                    <option id="L">L</option>
                                    <option id="XXL">XXL</option>
                                    <option id="M">M</option>
                                </select>

                            </div>

                            <div id="precio">
                                <p className="costo">$<span className="">2500</span></p>
                            </div>

                            <a href="" data-id="1"><button type="button" className="btn btn-primary compra">Comprar</button></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img id="imagen2" src={remeraVans}/>
                            <div id="producto2">
                                <h4 className="">Remera Vans</h4>
                            </div>

                            <div id="productodos">

                                <label for="talles">Talles:</label>

                                <select name="talles" id="talles">
                                    <option id="XL">XL</option>
                                    <option id="L">L</option>
                                    <option id="XXL">XXL</option>
                                    <option id="M">M</option>
                                </select>

                            </div>

                            <div id="precio">
                                <p className="costo">$<span className="">1500</span></p>
                            </div>

                            <a href="" data-id="2"><button type="button" className="btn btn-primary compra">Comprar</button></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Items