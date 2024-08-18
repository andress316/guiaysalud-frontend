import img1 from '../assets/que_es_el_cancer.jpg'
import img2 from '../assets/nutricion_para_cancer.jpg'
import img3 from '../assets/ley-y-financiamiento-del-tratamieto.jpg'

const guiasDeUsuario = [
    {
        _id: 1,
        nombre: 'andrés',
        guia_nombre_display: '¿Qué es? - Cáncer de pulmón',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        fecha: Date.now(),
        url: '',
        url_preview_img: img1,
        created: true
    },
    {
        _id: 2,
        nombre: 'andrés',
        guia_nombre_display: 'Nutrición para cáncer de pulmón',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        fecha: Date.now(),
        url: '',
        url_preview_img: img2,
        created: true
    },
    {
        _id: 3,
        nombre: 'andrés',
        guia_nombre_display: 'Tratamientos para cáncer de pulmón',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        fecha: Date.now(),
        url: '',
        url_preview_img: img3,
        created: true
    },
    {
        _id: 4,
        nombre: 'andrés',
        guia_nombre_display: 'Apoyo psicológico',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        fecha: Date.now(),
        url: '',
        url_preview_img: img3,
        created: false
    }
]

export default guiasDeUsuario