import { addUser } from "@/requests/queries";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function adduser({ content }) {
  const [logs, setLogs] = useState();
  const router = useRouter();
  const onSub = (e) => {
    e.preventDefault();
    // console.log(user);
    addUser(user)
      .then((res) => {
        router.push("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
    fuso_horario: "",
  });

  const setDatas = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-9/12 m-auto mt-10 bg-slate-200 p-3 rounded-md">
      <form className="w-5/12 m-auto flex flex-col" onSubmit={onSub}>
        <label htmlFor="name">Nome:</label>
        <input
          onChange={(e) => setDatas(e)}
          className="mb-2 rounded-md px-3 py-2"
          type="text"
          placeholder="Nome de usuario"
          id="name"
          name="name"
          value={user.name}
        />

        <label htmlFor="password">Senha:</label>
        <input
          className=" mb-2 rounded-md px-3 py-2"
          type="password"
          placeholder="*********************"
          id=""
          name="password"
          value={user.password}
          onChange={(e) => setDatas(e)}
        />
        <div className="w-full grid grid-cols-2">
          <label htmlFor="fuso">Id de usuario</label>
          <label htmlFor="fuso">Fuso Horário</label>
          <input
            onChange={(e) => setDatas(e)}
            name="id"
            value={user.id}
            className=" mb-2 rounded-md px-3 py-2"
            type="number"
            id=""
          />
          <select
            onChange={setDatas}
            name="fuso_horario"
            className="self-start p-2 "
          >
            <option value="GMT-1">GMT-1</option>
            <option value="GMT-3" selected>
              GMT-3
            </option>
            <option value="GMT-2">GMT-2</option>
          </select>
        </div>
        <input
          type="submit"
          className="cursor-pointer bg-yellow-500 px-4 text-white py-2 rounded-md self-end"
          Salvar
        />
        <div className="text-red-400">
          <p>{logs}</p>
        </div>
      </form>
    </div>
  );
}
