import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { editUser } from "@/requests/queries";
import axios from "axios";
import { redirect } from "next/navigation";
export default function edituser() {
  const router = useRouter();
  const [user, setUser] = useState();
  //     {
  //     name: "manito",
  //     password: "passs",
  //     id: 11,
  //     fuso_horario: "gmt",
  //   }

  const getUser = (id) => {
    axios
      .get(`http://localhost:8001/api/list-user/${id}`)
      .then((res) => {
        console.log(res.data.data[0]);
        setUser({
          name: res.data.data[0].nome_de_usuario,
          password: res.data.data[0].senha,
          id: res.data.data[0].id,
          fuso_horario: res.data.data[0].fuso_horario,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSub = (e) => {
    editUser(user)
      .then((res) => {
        // router.push("/user");
        router.back();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setDatas = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // console.log(router.query.id);
    getUser(router.query.id);
  }, []);

  return user ? (
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
          type="text"
          placeholder="*********************"
          id=""
          name="password"
          value={user.password}
          onChange={(e) => setDatas(e)}
        />
        <div className="w-full grid gap-2 grid-cols-2">
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
          <input
            onChange={(e) => setDatas(e)}
            name="fuso_horario"
            value={user.fuso_horario}
            className=" mb-2 rounded-md px-3 py-2"
            type="text"
            id=""
          />
        </div>
        <input
          type="submit"
          className="cursor-pointer bg-yellow-500 px-4 text-white py-2 rounded-md self-end"
          Salvar
        />
      </form>
    </div>
  ) : null;
}
