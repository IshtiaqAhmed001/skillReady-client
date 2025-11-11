import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CourseDetails = () => {
  const {id} = useParams();
  const [course,setCourse]=useState(null);

  useEffect(()=>{
axios.get(`http://localhost:3000/courses/${id}`).then((res) => {
  setCourse(res.data[0]);
}).catch(error=>{
  console.log(error)
})
;
  },[id])


  return (
    <div>
    <h1 className="text-5xl text-center my-5">{course?.title}</h1>
    </div>
  );
};

export default CourseDetails;
