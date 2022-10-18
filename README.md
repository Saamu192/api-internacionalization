# API - INTERCIONALIZATION

Essa é uma **API** que interage com você através do seu terminal. Nela é possível armazenar dados e mostra-los em qualquer língua e formato que você quiser,
por padrão a **API** mostra os dados no formato “pt-BR”.

## Primeiros passos:

PPara instalar a **API** em seu computador você apenas precisa fazer um clone do repositório:

🌐 GIT CLI:

- Abra o terminal no seu computador no seu diretório desejado.
- Digite o comando: gh repo clone Saamu192/api-internacionalization
    - em https: git clone [https://github.com/Saamu192/api-internacionalization.git](https://github.com/Saamu192/api-internacionalization.git)

📦 Alternativamente você pode fazer o download clicando em [Download ZIP](https://github.com/Saamu192/api-internacionalization/archive/refs/heads/master.zip)

## ⚒️ Configurando o ambiente:

A primeira coisa que precisamos fazer é instalar as dependências, use o gerenciador de pacotes de sua escolha.

Com o terminal aberto no diretório do projeto digite:

- Para quem usa yarn:

```json
yarn
```

- Para quem usa NPM:

```json
npm install
```

✅ Depois que o seu gerenciador de pacotes instalou todas as dependências, estamos prontos para usar a **API**

## 🧑‍💻 Usando a API

Como padrão os dados mostrados são no formato pt-BR, se você deseja que os dados sejam mostrados de outra forma, 
mude a variável **DEFAULT_LANG (src/index.js)** com a linguagem desejada.

Para iniciar a API no seu terminal digite o comando **yarn dev** ou **npm dev**. O banco de dados dentro do projeto já vem com um registro
para fins de exemplo. Quando você iniciar o projeto a seguinte mensagem deve aparecer no terminal:
```bash
$ npx nodemon --ignore database.json --exec node --experimental-json-modules --experimental-top-level-await  src/index.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node --experimental-json-modules --experimental-top-level-await src/index.js`
(node:24756) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | ID | vehicles                      | km Traveled | From                  | To                     |
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | 1  | Motocicleta, Carro e Caminhão | 10.000 km   | 01 de janeiro de 2009 | 26 de novembro de 2020 |
  +----+-------------------------------+-------------+-----------------------+------------------------+
```
Se você mudar a linguagem na constante **DEFAULT_LANG=’rus’** para russo, veja como ficaria:

```bash
+----+-------------------------------+-------------+-------------------+-------------------+
  | ID | vehicles                      | km Traveled | From              | To                |
  +----+-------------------------------+-------------+-------------------+-------------------+
  | 1  | Motocicleta, Carro и Caminhão | 10 000 км   | 01 января 2009 г. | 26 ноября 2020 г. |
  +----+-------------------------------+-------------+-------------------+-------------------+
```
A **API** tem como propósito trazer os dados formatados dependendo da linguagem escolhida.

## 📥 Adicionando novos dados

Após iniciar a API em seu terminal, você notará que o processo continua em andamento no seu terminal, 
isso porque ele está aguardando a inserção de novos dados, 
e uma vez inseridos, a API armazenará os dados em no arquivo **database.json** no projeto.

Inserindo um novo registro:
```bash
$ npx nodemon --ignore database.json --exec node --experimental-json-modules --experimental-top-level-await  src/index.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node --experimental-json-modules --experimental-top-level-await src/index.js`
(node:24756) ExperimentalWarning: Importing JSON modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | ID | vehicles                      | km Traveled | From                  | To                     |
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | 1  | Motocicleta, Carro e Caminhão | 10.000 km   | 01 de janeiro de 2009 | 26 de novembro de 2020 |
  +----+-------------------------------+-------------+-----------------------+------------------------+
  2 Avião,Helicóptero 56485 2020-05-04 2022-01-02
```
Saída:
```bash
  +----+-------------------------------+-------------+-----------------------+------------------------+
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | ID | vehicles                      | km Traveled | From                  | To                     |
  +----+-------------------------------+-------------+-----------------------+------------------------+
  | 1  | Motocicleta, Carro e Caminhão | 10.000 km   | 01 de janeiro de 2009 | 26 de novembro de 2020 |
  | 2  | Avião e Helicóptero           | 56.485 km   | 04 de maio de 2020    | 02 de janeiro de 2022  |
  +----+-------------------------------+-------------+-----------------------+------------------------+
```
⚠️ Perceba que existe uma ordem específca, [id] [item1,item2,item3] [km] [data inicial yy-mm-dd] [data final yy-mm-dd]. 

A Api utiliza os espaços no input do código para se orientar, portanto siga estritamente a ordem acima.

## 💽 Parando a API

Para parar o processo no terminal é preciso apenas digitar :q que a API finaliza o processo no terminal.

## 📄 Database

Os dados ficam todos dentro de um arquivo no formato json chamado database na raiz do projeto.

```json
[
  {
    "id": 1,
    "vehicles": [
      "Motocicleta",
      "Carro",
      "Caminhão"
    ],
    "kmTraveled": 10000,
    "from": "2009-01-01",
    "to": "2020-11-26"
  },
  {
    "id": "2",
    "vehicles": [
      "Avião",
      "Helicóptero"
    ],
    "kmTraveled": "56485",
    "from": "2020-05-04",
    "to": "2022-01-02"
  }
]
```



