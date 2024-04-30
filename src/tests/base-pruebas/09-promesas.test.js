import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retonar un hero', (done) => {
      
    const id = 1;

    getHeroeByIdAsync(id)
        .then(hero =>{
            
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            )

            done()
        })
    })
    
})