# Orientações para o Teste

**Prazo de entrega**: 03/02

- Criar um componente select e um componente switch
- Realizar cobertura de testes
- Obs: Realizar o download do arquivo para a melhor visualização do handoff (vide anexo).

## Componente Select:
- A aparência deve estar de acordo com o handoff.
- O usuário que utilizar o select deve passar o item para o select na seguinte interface:
  - [{value: "Value", label: "Label"}]
  - onde "value" é o valor do item selecionado e a "label" será o que vai aparecer visualmente em cada opção do select
- O usuário poderá utilizar esse componente via [(ngModel)] e Reactive Forms
- O usuário vai poder desabilitar o campo de select

## Componente Switch:
- A aparência deve estar de acordo com o handoff.
- O usuário poderá utilizar esse componente via [(ngModel)] e Reactive Forms (com os valores true ou false)
- O usuário vai poder desabilitar o switch
- O usuário poderá receber um evento informando o valor atual

## Handoff

- [Componente Select](./docs/select%20-%20ps.pdf)
- [Componente Switch](./docs/switch%20-%20ps.pdf)