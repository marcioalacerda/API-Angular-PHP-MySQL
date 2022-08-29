<?php 

//Incluir a conexão com o banco de dados "api" atraves do arquivo conexão
include("conexao.php");

//Preparar o comando select do SQL
$sql = "SELECT * FROM cursos";

//Executar o comando select ja preparado e receber os daods da busca pela variavel "$executar"
$executar = mysqli_query($conexao, $sql);

//Vetor para armazenar os dados
$cursos = [];

//Índice para saber qual posição do JSON eu vou está adicionando os meios dados
$indice = 0;

//Laço de repetição linha a linha
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso'] = $linha['idCurso'];
    $cursos[$indice]['nomeCurso'] = $linha['nomeCurso'];
    $cursos[$indice]['valorCurso'] = $linha['valorCurso'];

    $indice++;
}

//Apos o laço temos que encapsular os dados no JSON
//json_encode(['cursos'=>$cursos]);
echo json_encode($cursos);
//comando para testar a listagem do vetor 
//var_dump($cursos);

?>