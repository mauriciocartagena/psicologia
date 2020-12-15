

const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    institution.institutions.forEach(item =>({
        id_institucion:item.id_institucion,
        nombre: item.nombre,
        direccion: item.direccion,
        celular: item.celular,
        telefono: item.telefono ,
        imei: item.imei,
        nit: item.nit,
        nombre_contacto:item.nombre_contacto,
        modified: <MDBBtn id={ item.id_institucion } onClick={ ( e )=> handleUpdate(e) } color="primary">Modificar</MDBBtn>,
        deleted: <MDBBtn id={ item.id_institucion }  onClick={ ( e )=> handleDelete(e) } color="success">Eliminar</MDBBtn>
    }))


}