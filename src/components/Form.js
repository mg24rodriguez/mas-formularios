import React, {useState} from "react";
import './Form.css';


const Form = props => {
    const {inputs, setInputs} = props;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value 
      });
    }

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");



    return(
        <form>
            <div className="Input">
                    <label htmlFor = "firstName"> Nombres   </label>
                    <input type = "text" name = "firstName" placeholder="Ej. José"
                    onChange = {(e)=> setFirstName(e.target.value)} />
                </div>
                <div className="Alert">
                    {
                        firstName && firstName.length < 3 ? <p> Tu nombre debe tener más de 3 letras </p> : ""
                    }
            </div>


            <div className="Input">
                    <label htmlFor = "lastName"> Apellido   </label>
                    <input type = "text" name = "lastName" placeholder="Ej. Perez"
                    onChange = {(e)=> setLastName(e.target.value)} />
                </div>
                <div className="Alert">    
                    {
                        lastName && lastName.length < 3 ? <p> Tu apellido debe tener más de 3 letras </p> : ""
                    }            
            </div>

            <div className="Input">
                    <label htmlFor = "email"> Email   </label>
                    <input type = "text" name = "email" placeholder="Ej. usuario@email.com"
                    onChange = {(e)=> setemail(e.target.value)} />
                </div>
                <div className="Alert">     
                    {
                        email && email.length < 6 ? <p> Tu email debe tener al menos 5 caracteres </p> : ""
                    }   
            </div>

            <div className="Input">
                    <label htmlFor = "password"> Clave   </label>
                    <input type = "password" name = "password"
                    onChange = {(e)=> setpassword(e.target.value)} />
                </div>
                <div className="Alert">    
                    {
                        password && password.length < 8 ? <p> Tu contraseña debe tener minimo 8 caracteres. </p> : ""
                    }
            </div>

            <div className="Input">
                    <label htmlFor = "confirmPassword"> Repetir clave   </label>
                    <input type = "password" name = "password"
                    onChange = {(e)=> setconfirmPassword(e.target.value)} />
                </div>
                <div className="Alert">   
                    {
                        confirmPassword === password ? "": <p> Tus contraseñas no coinciden verificalas. </p>
                    }
            </div>
        </form>
    )
};

export default Form;