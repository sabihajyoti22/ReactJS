import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="routePage">
      <h3>About Us Page</h3>
      <p>Aliquyam dolor et clita ipsum amet et, at at ea stet dolores lorem et, accusam sea dolor est no ea aliquyam consetetur duo dolor, eirmod labore consetetur et ipsum et lorem eirmod. Sed eos amet duo amet sed tempor. Invidunt labore accusam sed lorem no est sadipscing rebum, dolore magna.Dolor tempor labore tempor duo dolor et dolores sed. Clita at sit justo stet eos takimata. Takimata labore sit no tempor sed eirmod dolores tempor. Vero sit tempor consetetur consetetur takimata. Sed dolor et diam sit et, amet sit diam et diam sed dolore et. Ea aliquyam ea gubergren takimata.</p>
      <p>Dolor tempor rebum ipsum invidunt no sea takimata at justo at. Sed ipsum eirmod takimata at sed amet dolor no lorem. Vero no dolor no invidunt et amet, dolores temporLabore et dolor kasd sanctus amet duo, kasd sed consetetur kasd lorem. Justo sadipscing duo voluptua amet ut sanctus consetetur. Ut sadipscing lorem est voluptua ipsum elitr. Lorem rebum sit.</p>
      <button onClick={()=>{
        navigate("/")
      }}>Go Back To Home page</button>
    </div>
  )
}

