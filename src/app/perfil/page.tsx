"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ICustomer from "./interfaces/ICustomer";
import Navbar from "@/components/navbar";
import "./perfil.css";
import Image from "next/image";
import { perfil } from "@/utils/apiUrl";

export default function Perfil() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<ICustomer[]>([]);

  const [token, setToken] = useState("");
  const [id, setId] = useState();
  const [identify_document, setIdentify_document] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [image_path, setImage_path] = useState("/imgs/perfil/foto.jpg");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const currentToken = sessionStorage.getItem("secretToken");
    const id = sessionStorage.getItem("id");

    if (!currentToken) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);

      fetch(`${perfil.api_online}/${id}`, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setId(data.data.id);
          setIdentify_document(data.data.identify_document);
          setName(data.data.name);
          setPhone(data.data.phone);
          setAddress(data.data.address);
          setBirthdate(data.data.birthdate);
          setEmail(data.data.email);
          setGender(data.data.gender);
          setImage_path(data.data.image_path);
          setStatus(data.data.status);
        });
    }
  }, [router]);
  if (isAuthenticated) {
    return (
      <>
        {isAuthenticated ? (
          <div>
            <Navbar />
            <div className="perfil">
              <Image
                alt="foto de perfil"
                src={image_path}
                width={70}
                height={70}
              />
              <h1>Seja bem-vindo, {name}</h1>
              <br />
              <h1>Dados:</h1>

              <p>RG: {identify_document}</p>
              <p>Telefone: {phone}</p>
              <p>Endereço: {address}</p>
              <p>Data de Nascimento: {birthdate}</p>
              <p>Email: {email}</p>
              <p>Genêro: {gender}</p>
              <p>Status: {status}</p>
            </div>
          </div>
        ) : (
          <div>Carregando...</div>
        )}
      </>
    );
  }
}
