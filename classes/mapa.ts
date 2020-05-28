import { Marcador } from './marcador';


export class Mapa {

    private marcadores: { [key: string]: Marcador } = {}

    constructor(){}

    getMarcadores(){
        return this.marcadores;
    }

    borrarMarcador( id: string ){
        delete this.marcadores[id];
        return this.marcadores;
    }

    moverMarcador( marcador: Marcador ) {
        this.marcadores[marcador.id].lng = marcador.lng;
        this.marcadores[marcador.id].lat = marcador.lat;
    }
}