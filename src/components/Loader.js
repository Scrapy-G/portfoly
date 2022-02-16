import { RotateLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div 
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
    >
        <RotateLoader/> 
    </div>
  )
}
