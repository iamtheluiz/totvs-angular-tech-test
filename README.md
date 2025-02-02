<p align="center">
  <img src="./.github/angular.svg" alt="Angular" width="96" />
  <br>
  Teste Técnico - Desenvolvedor Front-End (Angular)
</p>

<p align="center">
  <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-44475a?logo=typescript&color=191622&logoColor=white" />
  <img alt="Angular" src="https://img.shields.io/badge/-Angular-44475a?logo=angular&color=191622&logoColor=white" />
</p>

## 📝 Índice

- [Sobre](#-sobre)
- [Iniciando](#-iniciando)
- [Testes](#-testes)
- [Componentes](#-componentes)
- [Autores](#-autores)

## 📖 Sobre

- 🏷️ A versão do NodeJS utilizada foi a 20.11.0
- 🖥️ Este projeto foi gerado utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.1.4.
- 🔍 As orientações do teste estão disponíveis no arquivo [TODO.md](./TODO.md), contendo também os links para o handoff.

## 🏃 Iniciando

Primeiro, clone este repositório e acesse a pasta criada:

```bash
# Cloning repository
git clone https://github.com/iamtheluiz/totvs-angular-tech-test.git

cd totvs-angular-tech-test/
```

Instale todas as dependências do NodeJS:

```bash
npm install
```

Por fim, inicie o servidor de desenvolvimento:

```bash
npm run start
```

## 📝 Testes

Para executar os testes unitários, execute o comando:

```bash
npm run test
```

Também existe uma opção para executar os testes em um processo de esteiras (pipeline):

```bash
npm run test:ci
```

> [!NOTE]
> O comando "test:ci" gera um relatório de cobertura de testes em XML, que pode ser acessado em `coverage/report/cobertura-coverage.xml`, e um relatório dos casos de teste em `tests/results/junit.xml`.

## 📦 Componentes

Foram criados dois componentes para este projeto:

### `app-select`

Componente de seleção de opções, que recebe um array de objetos e exibe as opções em um dropdown.

![Select](./.github/select-component.png)

#### Entradas

- `name: string` - Nome do campo
- `placeholder: string` - Texto exibido quando nenhuma opção está selecionada
- `disabled: boolean` - Define se o campo está desabilitado
- `error: boolean` - Define se o campo está com erro
- `options: Array<SelectOption>` - Array de objetos com as opções a serem exibidas
- `label: string` - Label do campo (utilizado para acessibilidade)

#### Uso

```html
<app-select
  name="select"
  placeholder="Selecione uma opção"
  [disabled]="false"
  [error]="false"
  [options]="[
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' }
  ]"
  label="Selecione uma opção"
/>
```

### `app-switch`

Componente de switch, que exibe um botão de alternância.

![Switch](./.github/switch-component.png)

#### Entradas

- `checked: boolean` - Define se o switch está ativo.
- `disabled: boolean` - Define se o switch está desabilitado.
- `label: string` - Label do campo (utilizado para acessibilidade).

#### Saídas

- `checkedChange: EventEmitter<boolean>` - Evento emitido quando o switch é ativado ou desativado.

#### Uso

```html
<app-switch
  [checked]="false"
  [disabled]="false"
  label="Ativar switch"
  (checkedChange)="onSwitchChange($event)"
/>
```

## 💼 Autores

- **Luiz Gustavo da Silva Vasconcellos** - [iamtheluiz](https://github.com/iamtheluiz)
  - LinkedIn: [Luiz Gustavo da Silva Vasconcellos](https://www.linkedin.com/in/luiz-gustavo-da-silva-vasconcellos)
