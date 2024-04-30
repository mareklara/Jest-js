import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05 funciones', () => {
  test('getUser debe retornar un objecto', () => {

    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
}

    const user = getUser()
    
    expect(testUser).toStrictEqual(user)
  })


  test('getUsuario debe de retornar un objecto', () =>{

    const name = "Fernando"
    
    const usuario = getUsuarioActivo(name)
    
    expect(usuario).toStrictEqual({
        uid: 'ABC567',
        username: name
    })

   

  })


  
})
