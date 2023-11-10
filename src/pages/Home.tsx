// import '../index.css'
import { User } from "phosphor-react";
import { Input } from "../components/Input";

export default function Home() {
  return (
    <>
        <div style={{ width: '100%', maxWidth: '40rem', margin: 'auto 0'}}>
            <h2>Home</h2>
            <Input borderColor="#f40" backgroundColor="#dddddd" label="Nome" placeholder="Olá, informe seu nome" startAdornment={<User/>} endAdornment={<User/>}/>

        </div>
    </>
  )
};