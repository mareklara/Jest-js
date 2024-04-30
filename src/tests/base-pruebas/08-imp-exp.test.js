import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from "../../data/heroes"

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroesById debe de retornar un heroe por ID', () => {
      
        const id = 1
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({id: 1,
            name: 'Batman',
            owner: 'DC'})
    })

   test('getHeroesByOwner debe de retonar heroes de DC', () => {
     const owner = "DC"
     const getHeroes = getHeroesByOwner(owner)
     

     expect(getHeroes.length).toBe(3)
     expect(getHeroes).toEqual([
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
      ])
// this would be the most optimal way to do it
      expect(getHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner))
   })

   test('getHeroesByOwner debe de retonar heroes de Marvel', () => {
    const owner = "Marvel"
    const getHeroes = getHeroesByOwner(owner)
    

    expect(getHeroes.length).toBe(2)
    
// this would be the most optimal way to do it
     expect(getHeroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner))
     console.log(getHeroes)
  })
   
    
    
})