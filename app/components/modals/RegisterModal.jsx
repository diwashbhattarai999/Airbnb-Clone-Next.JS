"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

const RegisterModal = () => {
  // const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        // dispatch(onClose());
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return <Modal />;
};

export default RegisterModal;
