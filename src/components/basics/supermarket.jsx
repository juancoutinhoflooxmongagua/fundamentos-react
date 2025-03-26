import React from "react";
import '../../data/products';
import products from "../../data/products";

export default (props) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preço</th>
                        <th>mercado</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.preço}</td>
                                <td>{item.mercado}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
