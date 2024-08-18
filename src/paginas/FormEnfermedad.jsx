import { useParams } from "react-router-dom"
import CancerForm from "../components/forms/CancerForm"


const FormEnfermedad = () => {
    const params = useParams()
    const {enfermedad} = params

    if(enfermedad === 'cancer'){
        return <CancerForm />
    }


    if(enfermedad === 'epoc'){
        return <EpocForm />
    }

}

export default FormEnfermedad
