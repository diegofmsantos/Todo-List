"use client"

import Image from "next/image";
import { TaskItem } from "@/components/TaskItem";
import { Footer } from "@/components/Footer";
import { TaskProvider } from "@/context/TaskContext";
import { Header } from "@/components/Header";

const Page = () => {

  return (
    <TaskProvider>
      <div className="flex flex-col justify-center items-center w-screen h-screen overflow-x-hidden">
        <div className="-z-10 fixed w-screen h-screen">
          <Image
            src="/images/bg-todo-list.jpg" alt="background" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <div className="min-h-[500px] bg-white/80 rounded-md p-4 my-4 flex flex-col items-center gap-2">
          <Header />
          <TaskItem />
        </div>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default Page;