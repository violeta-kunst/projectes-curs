import BaseController from "./Base";

class PlatController extends BaseController {
    constructor() {
        super('m1fwgyajti42mh6', 'plats');
    }

    async getCarta() {
        let carta = await this.getAll();
        carta = carta.map(e => {
            let foto = (e.foto && e.foto[0].signedUrl) ? e.foto[0].signedUrl : '';
            delete e.foto;
            e.foto = foto;
            return e;
        });
        return carta;
    }
}

export default PlatController;