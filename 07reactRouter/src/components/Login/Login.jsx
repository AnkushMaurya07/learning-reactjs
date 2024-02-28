import React from "react";

function Login() {
  return (
    <>
      <div className="h-96 w-9/12 ml-32 bg-slate-400 text-3xl flex-col rounded-xl ">
        Login Page
        <table className="border-zinc-200 border- ml-48 mt-6">
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
        <button className="h-8 w-32 bg-orange-900 rounded-full mt-10 ">
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default Login;
