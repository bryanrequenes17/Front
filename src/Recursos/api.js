const path = "http://192.168.1.102:3000"
export default{
    registrar_usuario: path+"/api/crea_estudiante",
    inisio_sesion:path+"/api/iniciar_sesion",
    listar_actividad :path+'/api/listar_actividad',
    crea_resultado :path+'/api/crea_resultado',   
    predecir_imagen:path+'/api/predecir_imagen',
    predecir_ruta:path+'/api/predecir_ruta',
    listar_imagen:path+'/api/listar_imagen',

}