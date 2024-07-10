$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botaoCancela").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $("#enderecoImagemNova").val();
    const novoItem = $("<li style='display: none'></li>");
    $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
    $(`< class="overlay-imagem-link"/>
      <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamanho real
      </a>
      </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $("enderecoImagemNova").val("");
  });
});
