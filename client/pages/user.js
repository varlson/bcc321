import { deleteUser, queryUsers } from "@/requests/queries";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineAppstoreAdd, AiOutlineEdit } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function user(props) {
  const router = useRouter();
  var [data, setData] = useState([]);
  const [ready, setReady] = useState(false);
  const [logs, setLogs] = useState();

  const setLog = (log) => {
    setLogs(log);

    setTimeout(() => {
      setLogs(null);
    }, 3000);
  };

  const editHandle = (id, isToDelete) => {
    if (isToDelete) {
      deleteUser(id)
        .then((res) => {
          console.log(res);
          setReady(!ready);
        })
        .catch((error) => {
          console.log(error.msg);
          console.log(error.error.detail);
          const temp = ` ${error.msg} \n ${error.error.detail} `;
          setLog(temp);
        });
    } else {
      router.push({ pathname: "/edituser", query: { id: id } });
    }
  };

  useEffect(() => {
    queryUsers()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ready]);

  return (
    <div className="grid grid-cols-12 w-9/12 m-auto bg-slate-200 mt-10 rounded py-3 px-2">
      <div className="col-span-2">
        <div className=" cursor-pointer flex flex-col">
          <Link href="/adduser">
            <AiOutlineAppstoreAdd className="text-yellow-500 text-4xl" />
            <span>Adicionar </span>
          </Link>
        </div>
      </div>

      <div className="divide-y divide-yellow-600 col-span-10 grid grid-cols-12 border border-slate-300 rounded">
        {data
          ? data.map((item, index) => (
              <div key={index} className="col-span-12 grid grid-cols-12 gap-3">
                <div className="p-2 col-span-2">
                  <FaUserAlt className="text-6xl" />
                </div>
                <div className="col-span-5  self-center">
                  <div className="my-1">{`Nome: ${item.nome_de_usuario}`} </div>
                  <div className="my-1">
                    {`Fuso Horario: ${item.fuso_horario}`}{" "}
                  </div>
                </div>
                <div className="col-span-3">
                  <div className=" gap-4 text-4xl justify-self-end">
                    <div>
                      <AiOutlineEdit
                        id={"del"}
                        onClick={(e) => editHandle(item.id, 0)}
                        className="cursor-pointer text-yellow-500 my-3"
                      />
                    </div>
                    <div>
                      <MdDelete
                        id="dela"
                        onClick={(e) => editHandle(item.id, 1)}
                        className="cursor-pointer text-red-500 my-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      {logs && (
        <div className="my-3 col-start-4 col-span-5  text-red-400">
          <p className="font-semibold">{logs}</p>
        </div>
      )}
    </div>
  );
}
