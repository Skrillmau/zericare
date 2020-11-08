import React from 'react';
import Info from "../Componentes/Info/Info";
import BannerText from "../Componentes/BannerText/BannerText";

const PerfilM = (props) => {
    return (
        <div>
            <Info
                logout={this.handleLogout}
                imagen={this.state.usuario.imagen}
                nombre={this.state.usuario.nombre}
                apellido={this.state.usuario.apellido}
                id={this.state.usuario.registro}
                sexo={this.state.usuario.sexo}
                ocupacion={this.state.usuario.ocupacion}
            />
        </div>
    );
};

export default PerfilM;