"use client";
import { useState } from "react";
import Record from "@/app/ui/Record";
import userImg from "@/../public/users/demo-drawn.jpeg";
import recordImg1 from "@/../public/foods/demo-family-dinner.jpeg";
import recordImg2 from "@/../public/foods/demo-pizza.jpeg";

export default function Hub({ recipe }) {
  const dummy_user = {
    first_name: "Oren",
    picture: userImg,
  };
  const [records, setRecords] = useState([
    {
      id: "record0",
      user: dummy_user,
      comment: "Came out prefect!",
      images: [
        { id: "image0", img: recordImg1 },
        { id: "image1", img: recordImg2 },
        { id: "image2", img: recordImg2 },
      ],
      replies: [
        { id: "reply0", user: dummy_user, text: "Nice" },
        { id: "reply1", user: dummy_user, text: "Looks great!" },
      ],
    },
    {
      id: "record1",
      user: dummy_user,
      comment: "Came out prefect!",
      images: [
        { id: "image0", img: recordImg1 },
        { id: "image1", img: recordImg2 },
        { id: "image2", img: recordImg2 },
      ],
      replies: [
        { id: "reply0", user: dummy_user, text: "Nice" },
        { id: "reply1", user: dummy_user, text: "Looks great!" },
      ],
    },
  ]);

  function handleAddReply(record, reply) {
    const index = records.findIndex((r) => r.id === record.id);
    const updated = {
      ...record,
      replies: [...record.replies, reply],
    };
    setRecords((records) => records.toSpliced(index, 1, updated));
  }

  return (
    <section id="hub" className="hub">
      {records.map((record) => (
        <Record
          key={record.id}
          {...record}
          onAddReply={(reply) => handleAddReply(record, reply)}
        />
      ))}
    </section>
  );
}
