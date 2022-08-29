<?php 

//Incluir a conexão com o banco de dados "api" atraves do arquivo conexão
include("conexao.php");

//Obter dados JSON e manipular via php recebendo através de um input
$obterDados = file_get_contents("php://input");

//Extrair os dados do JSON que está na variavel $obterDados
$extrair = json_decode($obterDados);

//Separar (vetor) os dados do JSON cursos
$idCurso = $extrair ->idCurso; 

//Preparar o comando select do SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);


?>