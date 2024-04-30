import { getImagen } from "../../base-pruebas/11-async-await";


describe('Pruebasa en 11 async awwait js', () => { 

    test('getImagen debe de retornar url de la imagen ', async() => {
        
        const url = await getImagen();


        expect(typeof url).toBe('string')


    });
    
 });