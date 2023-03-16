import Link from "next/link";
import React from "react";
import {
  AiOutlineAppstoreAdd,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { MdMonitorHeart } from "react-icons/md";

export default function monitores() {
  return (
    <div className="grid grid-cols-12 w-9/12 m-auto bg-slate-200 mt-10 rounded py-3 px-2">
      <div className="col-span-2">
        <div className="cursor-pointer flex flex-col">
          <Link href="/addmonitor">
            <AiOutlineAppstoreAdd className="text-yellow-500 text-4xl" />
            <span>Adicionar </span>
          </Link>
        </div>
      </div>

      <div className="divide-y divide-yellow-600 col-span-10 grid grid-cols-12 border border-slate-300 rounded">
        <div className="col-span-12 grid grid-cols-12 gap-3">
          <div className="p-2 col-span-2">
            <MdMonitorHeart className="text-6xl" />
          </div>
          <div className="col-span-5  self-center">
            <div className="my-1">Nome: Suleimane Ducure</div>
            <div className="my-1">Status:GMT-3</div>
            <div className="my-1">ID do Criador:GMT-3</div>
            <div className="my-1">Data de Criação:GMT-3</div>
          </div>
          <div className="col-span-3">
            <div className="gap-4 text-2xl justify-self-end">
              <AiOutlineEdit className="text-yellow-500 my-2" />
              <AiOutlineDelete className="text-red-500 my-2" />
            </div>
          </div>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-3">
          <div className="p-2 col-span-2">
            <MdMonitorHeart className="text-6xl" />
          </div>
          <div className="col-span-5  self-center">
            <div className="my-1">Nome: Suleimane Ducure</div>
            <div className="my-1">Status:GMT-3</div>
            <div className="my-1">ID do Criador:GMT-3</div>
            <div className="my-1">Data de Criação:GMT-3</div>
          </div>
          <div className="col-span-3">
            <div className="gap-4 text-2xl justify-self-end">
              <AiOutlineEdit className="text-yellow-500 my-2" />
              <AiOutlineDelete className="text-red-500 my-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
