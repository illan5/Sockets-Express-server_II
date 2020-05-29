import { Marcador } from './marcador';


export class Mapa {

    private marcadores: { [key: string]: Marcador } = {

        '1': {
            id: '1',
            nombre: 'Jose',
            lng: -75.75512993582937,
            lat: 45.349977429009954,
            color: '#dd8fee'
          },
        '2': {
            id: '2',
            nombre: 'Hulio',
            lng: -75.75195645527508, 
            lat: 45.351584045823756,
            color: '#790af0'
          },
        '3': {
            id: '3',
            nombre: 'Ana',
            lng: -75.75900589557777, 
            lat: 45.34794635758547,
            color: '#19884b'
          }
    }

    constructor(){}

    getMarcadores(){
        return this.marcadores;
    }

    borrarMarcador( id: string ){
        delete this.marcadores[id];
        return this.getMarcadores();
    }

    moverMarcador( marcador: Marcador ) {
        this.marcadores[marcador.id].lng = marcador.lng;
        this.marcadores[marcador.id].lat = marcador.lat;
    }
}