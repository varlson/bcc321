import React from "react";

function addmonitor() {
  const onSub = () => {};

  return (
    <div className="w-9/12 m-auto mt-10 bg-slate-200 p-3 rounded-md">
      <form className="w-5/12 m-auto flex flex-col" onSubmit={onSub}>
        <label htmlFor="name">Nome do monitor:</label>
        <input
          className="mb-2 rounded-md px-3 py-2"
          type="text"
          placeholder="Nome de usuario"
          id="name"
        />

        <label htmlFor="password">Selecionar Usuario</label>
        <select className=" p-3 " name="select ">
          <option value="valor1" selected>
            User1
          </option>
          <option value="valor2">User-2</option>
          <option value="valor3">User-3</option>
        </select>

        <botton className="mt-3 bg-yellow-500 px-4 text-white py-2 rounded-md self-end">
          Salvar
        </botton>
      </form>
    </div>
  );
}

export default addmonitor;
