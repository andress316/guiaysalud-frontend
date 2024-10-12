import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import getAuthToken from '../utils/AuthToken';
import { Table, ToggleSwitch } from "flowbite-react";

const ConfiguracionNotificaciones = () => {
  const { auth, setAuth } = useAuth()

  const [emailNoticias, setEmailNoticias] = useState(true);
  const [emailGuias, setEmailGuias] = useState(true);
  const [emailInvitaciones, setEmailInvitaciones] = useState(true);
  const [whatsappNoticias, setWhatsappNoticias] = useState(true);
  const [whatsappGuias, setWhatsappGuias] = useState(true);
  const [whatsappInvitaciones, setWhatsappInvitaciones] = useState(true);
  const [botonGuardar, setBotonGuardar] = useState(false)

  const notificaciones = {
    email: {
      emailNoticias,
      emailGuias,
      emailInvitaciones
    },
    whatsapp: {
      whatsappNoticias,
      whatsappGuias,
      whatsappInvitaciones
    }
  }



  const handleEdit = async e => {
    e.preventDefault();
    try {
      const token = await getAuthToken();
      const configWithTokenBot = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };

      const { data } = await axios.put(`https://apiusers.guiaysalud.com/api/users/${auth.id}`, notificaciones, configWithTokenBot)
      console.log(data)
      window.location.reload();

    } catch (error) {
      console.log(error)
    }

  };



  return (
    <>
      <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 pb-10 transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mx-3">

        <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Configuración de Notificaciones</h1>

        <div className='flex md:flex-row flex-col items-center justify-center md:items-start relative gap-16 p-10'>

          <div className=''>
            <div className="overflow-x-auto">
              <Table className='drop-shadow-md'>

                <Table.Head>
                  <Table.HeadCell className='font-poppins'>Email</Table.HeadCell>
                  <Table.HeadCell className='font-poppins'>Activar / Desactivar</Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                      {'Noticias'}
                    </Table.Cell>
                    <Table.Cell>
                      <ToggleSwitch checked={emailNoticias} label={emailNoticias ? 'Activo' : 'Desactivado'} onChange={e => setEmailNoticias(!emailNoticias)} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                      {'Guías'}
                    </Table.Cell>
                    <Table.Cell>
                      <ToggleSwitch checked={emailGuias} label={emailGuias ? 'Activo' : 'Desactivado'} onChange={e => setEmailGuias(!emailGuias)} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                      {'Invitaciones'}
                    </Table.Cell>
                    <Table.Cell>
                      <ToggleSwitch checked={emailInvitaciones} label={emailInvitaciones ? 'Activo' : 'Desactivado'} onChange={e => setEmailInvitaciones(!emailInvitaciones)} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>


              </Table>
            </div>
          </div>


          <div>

            <Table className='drop-shadow-none'>

              <Table.Head>
                <Table.HeadCell className='font-poppins'>Whatsapp</Table.HeadCell>
                <Table.HeadCell className='font-poppins'>Activar / Desactivar</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                    {'Noticias'}
                  </Table.Cell>
                  <Table.Cell>
                    <ToggleSwitch checked={whatsappNoticias} label={whatsappNoticias ? 'Activo' : 'Desactivado'} onChange={e => setWhatsappNoticias(!whatsappNoticias)} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                    {'Guías'}
                  </Table.Cell>
                  <Table.Cell>
                    <ToggleSwitch checked={whatsappGuias} label={whatsappGuias ? 'Activo' : 'Desactivado'} onChange={e => setWhatsappGuias(!whatsappGuias)} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-slate-800 dark:text-white font-poppins">
                    {'Invitaciones'}
                  </Table.Cell>
                  <Table.Cell>
                    <ToggleSwitch checked={whatsappInvitaciones} label={whatsappInvitaciones ? 'Activo' : 'Desactivado'} onChange={e => setWhatsappInvitaciones(!whatsappInvitaciones)} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>


            </Table>

          </div>
        </div>
        <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition" onClick={handleEdit}>Guardar Cambios</button>

      </div>
    </>
  )
}

export default ConfiguracionNotificaciones
