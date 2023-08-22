import { useState } from "react"; 

const Employees = () => {
    const[employees, setEmployees] = useState([
        {
            id:1,
            fullName: "Julian Vaca",
            designation:"Desarrollador",
            gender:"Masculino",
            teamName:"TeamA"
        },
        {
            id:2,
            fullName: "Sofia Jimenez",
            designation:"Maestra",
            gender:"Femenino",
            teamName:"TeamA"
        },
    {
        id:3,
        fullName: "Adriana Maria",
        designation:"Desarrolladora",
        gender:"Femenino",
        teamName:"TeamC"
    },
    {
        id:4,
        fullName: "Andres Hernández",
        designation:"Desarrolladora",
        gender:"Maculino",
        teamName:"TeamB"
    },
    {
        id:5,
        fullName: "Daniel Lopez",
        designation:"Desarrolladora",
        gender:"Masculino",
        teamName:"TeamA"
    },
    {
        id:6,
        fullName: "Rodrigo Galindo",
        designation:"Desarrolladora",
        gender:"Masculino",
        teamName:"TeamC"
    },
    {
        id:7,
        fullName: "Alejandra Perez",
        designation:"Desarrolladora",
        gender:"Femenino",
        teamName:"TeamB"
    },
    {
        id:8,
        fullName: "Andrea Molina",
        designation:"Desarrolladora",
        gender:"Femenino",
        teamName:"TeamC"
    },
    {
        id:9,
        fullName: "Fredy Alexander",
        designation:"Desarrolladora",
        gender:"Masculino",
        teamName:"TeamA"
    },
    {
        id:10,
        fullName: "Natalia Perez",
        designation:"Desarrolladora",
        gender:"Femenino",
        teamName:"TeamC"
    },
    {
        id:11,
        fullName: "Diego Hortua",
        designation:"Desarrolladora",
        gender:"Maculino",
        teamName:"TeamB"
    },
    {
        id:12,
        fullName: "Jersson Paiba",
        designation:"Desarrolladora",
        gender:"Masculino",
        teamName:"TeamA"
    }
    ])
    return (
        <main>                    
            <table class="table table-primary text-center ">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Equipo</th>  
                        </tr>

           
            {
                employees.map((employee) => (
               

                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.fullName}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.teamName  }</td>
                            
                        </tr>
 

                ))
            }
                </table>
        </main>
        
    ) 
    
}
export default Employees;
