import React from "react";

function Login() {
  return (
    <>
      <div className="h-96 w-full bg-lime-400 text-3xl ">
        Login Page
        <table className="border-zinc-900 border-4">
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" name="Name" />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="text" name="Email" />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        <button className="h-8 w-32 bg-orange-900 rounded-full ">SUBMIT</button>
      </div>
    </>
  );
}

export default Login;
