"use client";

import { apiCadastro } from "@/utils/apiUrl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const [identify_document, setIdentify_document] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const setarEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const setarPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const setarRg = (e: any) => {
    setIdentify_document(e.target.value);
  };
  const setarNome = (e: any) => {
    setName(e.target.value);
  };
  const setarTelefone = (e: any) => {
    setPhone(e.target.value);
  };
  const setarEndereco = (e: any) => {
    setAddress(e.target.value);
  };
  const setarDataNascimento = (e: any) => {
    setBirthdate(e.target.value);
  };
  const setarGenero = (e: any) => {
    setGender(e.target.value);
  };
  const setarStatus = (e: any) => {
    setStatus(parseInt(e.target.value));
  };
  const setarConfirmSenha = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const envioForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(apiCadastro.api_online, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
          confirmPassword,
          name,
          phone,
          identify_document,
          address,
          birthdate,
          gender,
          status,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Cadastro bem sucedido!", data);
        router.push("/login");
      } else {
        if (response.status === 400) {
          const errorData = await response.json();
          console.log(errorData);
        }
      }
    } catch (error) {
      console.log("Erro ao enviar solicitação de cadastro", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie sua conta
          </h2>
        </div>

        <div className="mt-10 md:mx-auto sm:w-full sm:max-w-x1 divForm">
          <form className="space-y-6" onSubmit={envioForm}>
            <div className="flex">
              <div className="w-1/2 mr-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarNome}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="identity_document"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Documento de identificação
                  </label>
                  <div className="mt-2">
                    <input
                      id="identity_document"
                      name="identity_document"
                      type="text"
                      autoComplete="identity_document"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarRg}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telefone/Celular
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="phone"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarTelefone}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="birthdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data de nascimento
                  </label>
                  <div className="mt-2">
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      autoComplete="birthdate"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarDataNascimento}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Genêro
                  </label>
                  <div className="mt-2">
                    <select required onChange={setarGenero}>
                      <option>Escolha um gênero: </option>
                      <option value={"M"}>Masculino</option>
                      <option value={"F"}>Feminino</option>
                      <option value={"I"}>Outros</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Status
                  </label>
                  <div className="mt-2">
                    <select required onChange={setarStatus}>
                      <option>Escolha um status: </option>
                      <option value={"1"}>Ativo</option>
                      <option value={"0"}>Desativado</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Endereço
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="address"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarEndereco}
                    />
                  </div>
                </div>

                {/* <div className="mb-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cidade
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="city"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Estado
                  </label>
                  <div className="mt-2">
                    <select>
                      <option>Escolha seu estado</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                </div> */}

                <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Endereço de email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarEmail}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Senha
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarPassword}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirme sua senha
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="confirmPassword"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={setarConfirmSenha}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="globalButton flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "Carregando.." : "Cadastrar"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Você ja tem uma conta?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Entre aqui
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
