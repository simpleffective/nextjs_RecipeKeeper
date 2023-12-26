// import { useState } from "react";
import Record from "@/app/ui/Record";
import userImg from "@/../public/users/demo-drawn.jpeg";
import recordImg1 from "@/../public/foods/demo-family-dinner.jpeg";
import recordImg2 from "@/../public/foods/demo-pizza.jpeg";

export default function Hub({ records }) {
  // function handleAddReply(record, reply) {
  //   const index = records.findIndex((r) => r.id === record.id);
  //   const updated = {
  //     ...record,
  //     replies: [...record.replies, reply],
  //   };
  //   setRecords((records) => records.toSpliced(index, 1, updated));
  // }

  return (
    <section id="hub" className="hub">
      {records.map((record) => (
        <Record
          key={record.record_id}
          images={[record.image_url_1, record.image_url_2, record.image_url_3]}
          {...record}
          // onAddReply={(reply) => handleAddReply(record, reply)}
        />
      ))}
    </section>
  );
}
