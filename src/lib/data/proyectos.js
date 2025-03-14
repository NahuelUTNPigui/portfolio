export default [
    {
        src:"/images/egeo.svg",
        iconcolor:"border-rose-500",
        texticoncolor:"text-rose-500",
        alt:"Egeo",
        id:"1",
        nombre:"Preventas",
        descripcion:"Sistema para la gestión de viajes en la ciudad de Córdoba",
        //longdescripcion:"Aplicacion local para la gestión de viajes de la empresa Egeo. Existe un módulo de clientes para registrar sus información básica, su tarifario y las facturas asocidas. Se encuentra el módulo de proveedores para registrar el tarifario y los vehículos asociados. Esta presente un módulo de facturación para mantener actualizado los viajes pendientes por cobrar y los cobrados. Se incluye un módulo de reportes para realizar informes apropiados para las inquietudes que surgen. Toda la información puede ser exportada a excel",
        longdescripcion:"Sistema local para la gestión de viajes de la empresa Egeo. Esta herramienta incluye un módulo de clientes, donde se puede registrar su información básica, así como su tarifario y las facturas asociadas. Además, cuenta con un módulo de proveedores, que permite registrar el tarifario y sus vehículos.Asimismo, se presenta un módulo de facturación, diseñado para mantener actualizados los viajes pendientes por cobrar y los ya cobrados. Para complementar la gestión, se incluye un módulo de reportes, que facilita la generación de informes adecuados para atender las inquietudes que surgen.Por último, toda la información puede ser exportada a Excel, lo que permite un análisis más profundo y una gestión más eficiente de los datos.",
        parrafosdesc:[
            {text:"Aplicación local para la gestión de viajes de la empresa Egeo. Incluye un módulo de clientes, donde se puede registrar su información básica, su tarifario y las facturas asociadas. Además, cuenta con un módulo de proveedores, que permite registrar el tarifario, sus vehículos y choferes."},
            {text:"La actividad principal del negocio se gestiona con el módulo de remitos con el que se pueden registrar viajes con sus clientes, proveedores, fecha y monto como también mantener un historial de las etapas que recorrió. "},
            {text:"Tambien está módulo de facturación, diseñado para mantener actualizados los viajes pendientes por cobrar y los ya cobrados. Para complementar la gestión, se incluye un módulo de reportes para la generación de informes según las inquietudes que surgan."},
            {text:"Por último, toda la información puede ser exportada a Excel."}],
        mainimage:{src:"/images/preventas1bis.png",descripcion:"main image"},
        images:[
            {src:"/images/preventas1bis.png",titulo:"HOME",descripcion:"En el inicio se pueden ver los últimos remitos cargados"},
            {src:"/images/preventas2bisnocuil.png",titulo:"CLIENTES",descripcion:"Se registran los clientes para llevar un control de los remitos asociados"},
            {src:"/images/preventas3noprice.png",titulo:"TARIFARIO",descripcion:"Se mantiene el seguimiento de los precios actuales e históricos de clientes y proveedores"},
            {src:"/images/preventas4bis.png",titulo:"REMITOS",descripcion:"La transaccióm más importante son los viajes que son registrados mediante remitos"},
            {src:"/images/preventas5nototal.png",titulo:"REPORTE",descripcion:"Existe una sección especial para crear reportes de los viajes tanto para hacer hacer análisis de información como para base de facturación"}
        ],
        color:"bg-blue-950",
        textcolor:"text-white",
        texttitle:"text-white",
        hovercolor:"text-blue-600",
        link:""

    },
    {
        id:"2",
        iconcolor:"border-indigo-500",
        texticoncolor:"text-indigo-500",
        nombre:"Abrazadoras",
        descripcion:"Aplicación online para la gestión del voluntariado de las abrazadoras",
        longdescripcion:"Aplicación online que da soporte a las activiades del voluntariado de las abrazadoras. Se incluye un módulo de usuario para que solo se pueda ingresar a la aplicación si ya tienes un usuario. Tambien esta presente el módulo de bebés para llevar un historial de los diferentes diagnósticos por los que pasan. Se incluye tambien el módulo de abrazos que es la actividad principal del voluntariado junto con la posibilidad  de hacer reportes para estadisticas futuras. Toda la información puede ser exportada a excel",
        //Aplicación online que da soporte a las actividades del voluntariado de las abrazadoras. La aplicación incluye un módulo de usuario, que garantiza que solo puedan ingresar quienes ya tienen un usuario registrado. Además, está presente un módulo de bebés, donde se lleva un historial de los diferentes diagnósticos que presentan.
        //Asimismo, se incluye el módulo de abrazos, que es la actividad principal del voluntariado. Este módulo permite realizar reportes para generar estadísticas futuras, lo que facilitará la planificación y evaluación de las actividades.
        //Por último, toda la información puede ser exportada a Excel, lo que permite un análisis más detallado de los datos recopilados.
        parrafosdesc:[
            {text:"Aplicación online que da soporte a las actividades del voluntariado de las abrazadoras que cuenta con un módulo de usuarios para garantizar la seguridad."},
            {text:"La actividad principal del voluntariado se gestiona con el módulo de abrazos con el que se registan abrazos de una voluntaria a un bebé en una unidad y fecha. Este módulo permite realizar reportes para generar estadísticas futuras, lo que facilitará la  evaluación de las actividades."},
            {text:"Por último, toda la información puede ser exportada a Excel, lo que permite un análisis más detallado de los datos recopilados."}
        ],
        src:"/images/absapplogo2.png",
        alt:"Abrazadoras",
        mainimage:{src:"/images/absapp2bisnonames.png",descripcion:"main image"},
        images:[
            {src:"/images/absapp1bis.png",titulo:"LOGIN",descripcion:"Pagina de inicio para ingresar con usuario y contraseña. Permite utilizar colores oscuros"},
            {src:"/images/absbebe.png",titulo:"BEBE",descripcion:"Se registran los bebés con sus datos básicos"},
            {src:"/images/abshistorial.png",titulo:"ABRAZOS",descripcion:"Se mantiene un listado de los bebés cuidados por el voluntariado con los estados que puede tener"},
            {src:"/images/absapp2bisnonames.png",titulo:"VOLUNTARIAS",descripcion:"Módulo de voluntarias encargadas de abrazar los bebés, cada una tiene un usuario asociado"},
            {src:"/images/absapp4bisnonames.png",titulo:"ABRAZOS",descripcion:"Se llevar un historial de todos los abrazos con lo que se pueden hacer reportes y exportar a excel"}
        ],
        color:"bg-green-500",
        textcolor:"text-black",
        texttitle:"text-black",
        hovercolor:"text-blue-600",
        link:""
    }
    ,
    {
        id:"3",
        iconcolor:"border-green-500",
        texticoncolor:"text-green-500",
        nombre:"Creciente fertil",
        descripcion:"Aplicación online para la gestión de establecimientos ganaderos",
        longdescripcion:"Aplicación que permite el control del ganado de uno o varios establecimientos. Se mantiene un historial de los animales desde su nacimiento hasta que son transferidos o son dados de  baja. Se mantiene un control de cada evento que surge en los establecimientos. Se permite tener varios colaboradores por establecimiento. Finalmente se pueden hacer reportes de las actividades y animales del establecimiento",
        parrafosdesc:[
            {text:"Aplicación que da soporte a las actividades de 1 o varios establecimientos junto con sus animales e historiales."},
            {text:"La función principal de la aplicación es que los dueños de establecimientos tengan una herramienta sencilla para hacer el seguimiento de sus animales."},
            {text:"Se cuenta con un módulo de animales para conocer todos los eventos que recibió como tratamientos, inseminaciones , tactos, etc."},
            {text:"Existe un módulo de establecimientos que permite gestionar colaboradores junto con sus permitos, transferir animales entre sí y ver reportes de los datos."}
        ],
        src:"/images/fertillogo.jpg",
        alt:"Abrazadoras",
        mainimage:{src:"/images/fert1l.png",descripcion:"main image"},
        images:[
            {src:"/images/fert5l.png",titulo:"LOGIN",descripcion:"Pagina para ingresar con usuario y contraseña. Permite utilizar colores oscuros"},
            {src:"/images/fert1l.png",titulo:"INICIO",descripcion:"Pagina principal donde se ve un resumen del establecimiento y permite acciones básicas"},
            {src:"/images/fert8l.png",titulo:"ESTABLECIMIENTO",descripcion:"Datos principales del establecimientos"},
            {src:"/images/fert7l.png",titulo:"COLABORADORES",descripcion:"Sección de colaboradores para agregar nuevos o asociar usuarios existentes"},
            {src:"/images/fert2l.png",titulo:"ANIMAL",descripcion:"Pagina donde se ven los datos necesarios de un animal al que luego se le asocian eventos"},
            {src:"/images/fert3l.png",titulo:"TRATAMIENTOS",descripcion:"Página de nuevos tratamientos que permite seleccionar varios animales y asignarles algun tratamiento, en varios eventos se permite la creación múltiple"},
            {src:"/images/fert4l.png",titulo:"REPORTES",descripcion:"Ejemplo de algunos de los reportes que se puede hacer como el peso por categoria de animal "},
            {src:"/images/fert6l.png",titulo:"MENU",descripcion:"Se tiene acceso a las funcionalidades del sistema"}


        ],
        color:"bg-amber-500",
        textcolor:"text-black",
        texttitle:"text-black",
        hovercolor:"text-blue-600",
        link:"https://fertil.netlify.app/login/"
    }
]
