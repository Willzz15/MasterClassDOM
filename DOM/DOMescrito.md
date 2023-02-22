# MASTERCLASS DOM: fonte do estudo.

https://www.youtube.com/watch?v=UftSB4DaRU4&list=PLWwq4PUrlXk44NyL9vlx0B78KAxhm7t_a&index=24&t=269s

## document.

Para percorrer uma NodeList podemos usar o _.forEach()_ que executara para cada interação dado código.

# PRIMEIRO PASSO, SELECIONAR O ELEMENTO.

# Para a Busca ou seleção de elemento(s) e uma NodeList(Varios elementos) \*\*\*

_- querySelector("Return Element")_ Capitra de um unico elemto. Sua capitura de class e id é igualmente ao CSS.

_- querySelectorAll("NodeList")_ Capitura a seleção de tags e class/id com o mesmo nome. Usado par capitura de mais de 1 elemento de mesma tag, class ou id. Ferramenta usada para percorrer a NodeList(Vetor, array) foreach() map()

# Manipular conteúdo \*\*\*

_- textContent = ""_ :Mostrara o texto dentro do conteudo selecionado. Resposta: text.

_- innerText = ""_ :Manipulação do texto dentro do conteudo selecinado, com adição de um novo texto ou mudança do texto atual. Resposta: text.

_- innerHTML = ""_ :Minipulação da tag selecionada, adiciinando tag ou conteudos no HTML via texto. Ex: innerHTML"<h1>Texto</h1>". Ele podera adicionar uma tag no html. Resposta: HTML.

_- .value_ (input) :Para a capitra do valor do input e sua alteração.

# Alterando estilos

_- style.propety_ = "" : Ele dara acesso para alterar o estilo do elemento selecionado. A escrita da proprety devera ser estilo "CamelCase" sem os "-" que usamos no CSS.

# Adicionar ou remover class e togg \*\*\*

_- .classList_ :Usamos este termo quando queremos manipular sua class.
Temos como termos para o uso da classList: .add() .remove() .toggle()

_.add("texto")_ Ele adiciona em sua class no elemento selecionado o texto especificado.

_.remove("texto")_ Ele remove de sua class no elemento selecionado o texto especificado.

_.toggle("texto")_ Ele ira verificar se o texto especificado se encontra na class do elemento selecinado. Caso tenho o texto, ele o removera. Caso não tenha o texto, ele ira adicionalo a sua class.

# Navegando pelos elementos \*\*\*

## PAIS (acima do Elemento)

_- .parentNode._ Para alcançar seu Pai.
_- .parentElement._ Para alcançar seu Pai.

## Filhos (dentro do Elemento)

_- .childNodes._ Retornara uma "NodeList" com seus filhos, mas colocara os espaços em branco juntos.
_- .children._ Retornara uma "HTML colection"(Paracido com uma Nodelist ou Array) com todos os filhos do elemento.

_- .childElementCount._ Retornara o numero de filhos que o elemento tem.

_- .firstChild._ Retornara o primeiro filho do elemento.
_- .lastChild._ Retornara o ultimo filho do elemento.

## Irmão (mesmo nivel do Elemento)

_- .nextSibling._ Retorna o "proximo" irmão(Elemento) do elemento selecinado do mesmo nivel.
_- .nextElementSibling._ Retorna o proximo irmão(Elemento) do elemento selecinado do mesmo nivel.
_- .previousSibling._ Retorna o irmão(Elemento) do mesmo nivel "anterior" ao elemento selecinado.
_- .previousElementsSibling._ Retorna o irmão(Elemento) do mesmo nivel "anterior" ao elemento selecinado.

# Criando Elementos \*\*\*

_- .createElement("texto")_ :Criara um elemento HTML. Ele ficara armasenado em sistema em uma variável(let/const).
O elemento que ira criar deve estár escrito no campo texto em formato string, pois o HTML só aceita string em seu arquivo.

# Inserindo elementos no HTML \*\*\*

## Elemento (Dentro do elemento selecinado)

_- .appendChild()_ inserira o elemento dentro de parencetes, dentro do elemento selecinado, "apos" todos os elementos do element selecionado.

_- .append()_ inserira o elemento dentro de parencetes, dentro do elemento selecinado, "apos" todos os elementos do element selecionado.

_- .prepend()_ inserira o elemento dentro de parencetes, dentro do elemento selecinado, "antes" todos os elementos do element selecionado.

## Elemento (Entre o nó do elemento selecinado)

_- .insertBefore(novoElement, "Anterior"Element)_ inserira o novoElemento dentro de parenteses, "apos" o element selecinado e antes do elemento "anterior" selecionado.

_- .insertAfter(novoElement, "Anterior"Element)_ inserira o novoElemento dentro de parenteses, "antes" o element selecinado e antes do elemento "anterior" selecionado.

# Trabalhando com propriedades do elemento

## Selecionar o element

_- .getAtrribute("atributo")_ Ele retornara o atributo expecificado, caso tenho o atributo.

_- .setAtrriibute("atributo", "valor")_ No campo do "atributo" especificara onde deve adicionar(settar) o dado valor entre parenteses.

_- .removeAttribute("atributo")_ Removera o atributo expecificado.

# Eventos

_- .addEventListener("tipo de evento",function(event){})_

Esta função aciona um evento, que é passado para function como"event". Dentro da function, criamos a logica para o evento.
Eventos é oque cria a interação do usuario com a pagina.
Alguns tipos de eventos mais usados:

## load

## click

## scroll

## keydown

## change

## submit

## event

targt:
id
class

Sempre que usarmos o _.addEventListener()_ ele passara um evento para a função, este evento será em decorrer do evento que colocamos atualmente. Podemos usa o "type" para saber qual o tipo de evento. Dentro deste event temos uma cadeia de methods e chave/Vale para ser usados.

Para previnir um evento usamos o _preventDefault(),_ isso para ele fazer o contrario que o event deve fazer.
