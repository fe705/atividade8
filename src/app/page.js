"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaCheck, FaTrash } from "react-icons/fa";
import ReactInputMask from "react-input-mask";
import Pagina from "./components/Pagina";

export default function CadastroPage() {
  function cadastrar(imovel) {
    console.log(imovel);
    const imoveis = JSON.parse(localStorage.getItem("imoveis")) || [];
    imoveis.push(imovel);
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
    alert("Imovel cadastrado com sucesso...");
  }

  const initialValues = {
    proprietario: {
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
    },
    endereco: {
      cep: "",
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
    tipo: "",
    finalidade: "",
    valor: "",
    area: "",
    quartos: "",
    banheiros: "",
    descricao: "",
    vagasGaragem: "",
    foto: "",
  };

  const validationSchema = Yup.object().shape({
    proprietario: Yup.object().shape({
      nome: Yup.string().required("Campo é obrigatório"),
      cpf: Yup.string().required("Campo é obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo é obrigatório"),
      telefone: Yup.string().required("Campo é obrigatório"),
    }),
    endereco: Yup.object().shape({
      cep: Yup.string().required("Campo é obrigatório"),
      logradouro: Yup.string().required("Campo é obrigatório"),
      numero: Yup.string().required("Campo é obrigatório"),
      complemento: Yup.string().required("Campo é obrigatório"),
      bairro: Yup.string().required("Campo é obrigatório"),
      cidade: Yup.string().required("Campo é obrigatório"),
      uf: Yup.string().required("Campo é obrigatório"),
    }),
    tipo: Yup.string().required("Campo é obrigatório"),
    finalidade: Yup.string().required("Campo é obrigatório"),
    valor: Yup.string().required("Campo é obrigatório"),
    area: Yup.string().required("Campo é obrigatório"),
    quartos: Yup.string().required("Campo é obrigatório"),
    banheiros: Yup.string().required("Campo é obrigatório"),
    descricao: Yup.string().required("Campo é obrigatório"),
    vagasGaragem: Yup.string().required("Campo é obrigatório"),
    foto: Yup.string(),
  });

  return (
    <Pagina titulo={" Cadastro de Imovel"}>
      {/* Formulário de Cadastro de Imovel */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={cadastrar}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleReset,
          handleChange,
        }) => (
          <Form onSubmit={handleSubmit}>
            {/* Dados pessoais */}
            <div className="text-center py-4">
              <h3>Dados Proprietario</h3>
              <hr />
            </div>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name="proprietario.nome"
                  type="text"
                  value={values?.proprietario?.nome}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.proprietario?.nome && !errors?.proprietario?.nome
                  }
                  isInvalid={
                    touched?.proprietario?.nome && !!errors?.proprietario?.nome
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.proprietario?.nome}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>CPF:</Form.Label>
                <Form.Control
                  as={ReactInputMask}
                  mask={"999.999.999-99"}
                  placeholder="999.999.999-99"
                  name="proprietario.cpf"
                  type="text"
                  value={values?.proprietario?.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.proprietario?.cpf && !errors?.proprietario?.cpf
                  }
                  isInvalid={
                    touched?.proprietario?.cpf && !!errors?.proprietario?.cpf
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.proprietario?.cpf}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>E-mail:</Form.Label>
                <Form.Control
                  name="proprietario.email"
                  type="email"
                  value={values?.proprietario?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.proprietario?.email && !errors?.proprietario?.email
                  }
                  isInvalid={
                    touched?.proprietario?.email &&
                    !!errors?.proprietario?.email
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.proprietario?.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md={6}>
                <Form.Label>Telefone:</Form.Label>
                <Form.Control
                  as={ReactInputMask}
                  mask={"(99)99999-9999"}
                  placeholder="(99)99999-9999"
                  name="proprietario.telefone"
                  type="text"
                  value={values?.proprietario?.telefone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.proprietario?.telefone &&
                    !errors?.proprietario?.telefone
                  }
                  isInvalid={
                    touched?.proprietario?.telefone &&
                    !!errors?.proprietario?.telefone
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.proprietario?.telefone}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Endereço */}
            <div className="text-center py-3">
              <h2>Endereço</h2>
              <hr />
            </div>

            <Row className="mb-2">
              <Form.Group as={Col} md={3}>
                <Form.Label>Cep:</Form.Label>
                <Form.Control
                  as={ReactInputMask}
                  mask={"00000-000"}
                  placeholder="00000-000"
                  name="endereco.cep"
                  type="text"
                  value={values?.endereco?.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.cep && !errors?.endereco?.cep}
                  isInvalid={touched?.endereco?.cep && !!errors?.endereco?.cep}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.cep}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Logradouro:</Form.Label>
                <Form.Control
                  name="endereco.logradouro"
                  type="text"
                  value={values?.endereco?.logradouro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.endereco?.logradouro &&
                    !errors?.endereco?.logradouro
                  }
                  isInvalid={
                    touched?.endereco?.logradouro &&
                    !!errors?.endereco?.logradouro
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.logradouro}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Numero:</Form.Label>
                <Form.Control
                  name="endereco.numero"
                  type="text"
                  value={values?.endereco?.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.endereco?.numero && !errors?.endereco?.numero
                  }
                  isInvalid={
                    touched?.endereco?.numero && !!errors?.endereco?.numero
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.numero}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Complemento:</Form.Label>
                <Form.Control
                  name="endereco.complemento"
                  type="text"
                  value={values?.endereco?.complemento}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.endereco?.complemento &&
                    !errors?.endereco?.complemento
                  }
                  isInvalid={
                    touched?.endereco?.complemento &&
                    !!errors?.endereco?.complemento
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.complemento}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Cidade:</Form.Label>
                <Form.Control
                  name="endereco.cidade"
                  type="text"
                  value={values?.endereco?.cidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.endereco?.cidade && !errors?.endereco?.cidade
                  }
                  isInvalid={
                    touched?.endereco?.cidade && !!errors?.endereco?.cidade
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.cidade}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Bairro:</Form.Label>
                <Form.Control
                  name="endereco.bairro"
                  type="text"
                  value={values?.endereco?.bairro}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={
                    touched?.endereco?.bairro && !errors?.endereco?.bairro
                  }
                  isInvalid={
                    touched?.endereco?.bairro && !!errors?.endereco?.bairro
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.bairro}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>UF:</Form.Label>
                <Form.Control
                  name="endereco.uf"
                  type="text"
                  value={values?.endereco?.uf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched?.endereco?.uf && !errors?.endereco?.uf}
                  isInvalid={touched?.endereco?.uf && !!errors?.endereco?.uf}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.endereco?.uf}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Dados de Imóvel */}
            <div className="text-center py-3">
              <h3>Dados de Imóvel</h3>
              <hr />
            </div>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Tipo</Form.Label>
                <Form.Select
                  name="tipo"
                  value={values.tipo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.tipo && !errors.tipo}
                  isInvalid={touched.tipo && !!errors.tipo}
                >
                  <option disabled value="">
                    Selecione
                  </option>
                  <option value="casa">Casa</option>
                  <option value="comercial">Comercial</option>
                  <option value="terreno">Terreno</option>
                  <option value="industrial">Industrial</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.tipo}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Finalidade:</Form.Label>
                <Form.Select
                  name="finalidade"
                  value={values.finalidade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.finalidade && !errors.finalidade}
                  isInvalid={touched.finalidade && !!errors.finalidade}
                >
                  <option disabled value="">
                    Selecione
                  </option>
                  <option value="venda">Venda</option>
                  <option value="aluguel">Aluguel</option>
                  <option value="temporada">Temporada</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.finalidade}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Valor:</Form.Label>
                <Form.Control
                  name="valor"
                  type="number"
                  placeholder="R$000,00"
                  value={values.valor}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.valor && !errors.valor}
                  isInvalid={touched.valor && !!errors.valor}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.valor}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>Area (m²):</Form.Label>
                <Form.Control
                  name="area"
                  type="number"
                  placeholder="Exemplo: 24(m²)"
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.area && !errors.area}
                  isInvalid={touched.area && !!errors.area}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.area}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Quartos:</Form.Label>
                <Form.Control
                  name="quartos"
                  type="number"
                  placeholder="0"
                  value={values.quartos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.quartos && !errors.quartos}
                  isInvalid={touched.quartos && !!errors.quartos}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.quartos}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Banheiros:</Form.Label>
                <Form.Control
                  name="banheiros"
                  type="number"
                  placeholder="0"
                  value={values.banheiros}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.banheiros && !errors.banheiros}
                  isInvalid={touched.banheiros && !!errors.banheiros}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.banheiros}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Vagas Garagem:</Form.Label>
                <Form.Control
                  name="vagasGaragem"
                  type="number"
                  placeholder="0"
                  value={values.vagasGaragem}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.vagasGaragem && !errors.vagasGaragem}
                  isInvalid={touched.vagasGaragem && !!errors.vagasGaragem}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.vagasGaragem}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group as={Col}>
              <Form.Label>Link da Foto:</Form.Label>
              <Form.Control
                name="foto"
                type="text"
                placeholder="Adicione uma foto do local."
                value={values.foto}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.foto && !errors.foto}
                isInvalid={touched.foto && !!errors.foto}
              />
              <Form.Control.Feedback type="invalid">
                {errors.foto}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="py-3" as={Col}>
              <Form.Label>Descrição:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="descricao"
                type="text"
                placeholder="Descrição curta do imóvel com suas principais características."
                value={values.descricao}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.descricao && !errors.descricao}
                isInvalid={touched.descricao && !!errors.descricao}
              />

              <Form.Control.Feedback type="invalid">
                {errors.descricao}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Botões */}
            <Form.Group className="text-end mb-5">
              <Button onClick={handleReset} className="me-2">
                <FaTrash /> Limpar
              </Button>
              <Button type="submit" variant="success">
                <FaCheck /> Enviar
              </Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </Pagina>
  );
}