import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
const SportsFixture = () => {
  let history = useHistory()
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get('http://localhost:8000/api/allfixture')
console.log(data)
    setAppointmentInfo(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div>
      <Navbar />
      <div class='row mb-3'>
        <div class='col-md-12'>
          <div class=' text-center donate-main  bg-1'></div>
        </div>
      </div>
      <h1 className='text-center my-3'>Football Fixture:</h1>
      <div class='row m-3'>
        {appointmentInfo.map((fixture, index) => {
          return (
            <>
              <div class='col-sm-4 mt-1'>
                <div class='card'>
                  <div class='card-body'>
                    <h5 class='card-title'>{fixture.match}</h5>
                    <p className='description'>
                     {fixture.date}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SportsFixture
