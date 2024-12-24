import React, { useState } from "react";
import "../styles/Signup.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

let fields = [
  {
    title: "First Name",
    placeholder: "Enter Your First Name",
    name: "firstName",
    type: "text",
  },
  {
    title: "Last Name",
    placeholder: "Enter Your Last Name",
    name: "lastName",
    type: "text",
  },
  {
    title: "Email Id",
    placeholder: "Enter Your  Email Id",
    name: "email",
    type: "text",
  },
  {
    title: "Phone Number",
    placeholder: "Enter Your Phone Number",
    name: "phone",
    type: "number",
  },
  {
    title: "Create Password",
    placeholder: "Create Your Password",
    name: "createpass",
    type: "password",
  },
  {
    title: "Confirm Password",
    placeholder: "Confirm Your Password",
    name: "confirmpass",
    type: "password",
  },
];

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createPass: "",
    confirmPass: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [info, setInfo] = useState([]);
  const [editing, setEditing] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...formValues };

    if (editing === true) { 
      const updatedData = [...info];
      updatedData[editing] = newData;
      setInfo(updatedData);      
      setEditing(false);  
    } else {
      setInfo([...info, formValues])
      }

    const isFilled = Object.keys(formValues).map((value) => value);
    if (!isFilled) {
      alert("Please fill out all fields.");
    } 
    else{
          navigate("/login");
        }
        setFormValues(initialValues);

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const deleteData = (i) => {
    const newInfo = [...info]; 
    newInfo.splice(i, 1); 
    setInfo(newInfo); 
  };

  const editData = (i) => {
    const dataEdit = info[i]; 
    setFormValues(dataEdit);
    setEditing(i)
  }

  return (
    <>
      <div className="signup">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          {fields.map((field, i) => {
            return (
              <div className="fields" key={i}>
                <p>{field.title}</p>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formValues[field.name] || ""}
                  onChange={handleChange}
                />
              </div>
            );
          })}
          <div className="next-buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {info.length > 0 && (
        <div className="submittedData">
          <h1>Submitted Data</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {info.map((val, i) => (
                <tr key={i}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td className="ed-buttons">
                    <button className="edit-button" 
                    onClick={() => editData(i)}
                      >
                      <BsFillPencilFill className="edit-button" />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => deleteData(i)}
                    >
                      <BsFillTrashFill className="delete-button" />
                    </button>
                    </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Signup;
