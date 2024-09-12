<?php

// Verifique se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Pegando os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $endereco = $_POST['endereco'];
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];

    // Configurando o cURL para enviar a requisição POST para a API
    $curl = curl_init();

    $data = array(
        'name' => $name,
        'email' => $email,
        'password' => $password,
        'endereco' => $endereco,
        'cidade' => $cidade,
        'estado' => $estado,
    );

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://127.0.0.1:8000/api/clientes', // URL da API
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($data), // Converte os dados para JSON
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    // Verificando se houve erro na requisição cURL
    if (curl_errno($curl)) {
        echo 'Erro no cURL: ' . curl_error($curl);
    } else {
        // Exibindo a resposta da API
        echo 'Cliente cadastrado com sucesso!' ;
    }

    curl_close($curl);
}
?>
