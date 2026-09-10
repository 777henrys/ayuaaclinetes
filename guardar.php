```php
<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Método no permitido");
}


/*
 * Nombre poco obvio del archivo donde se guardan
 * los registros de la demostración.
 */
$archivo = __DIR__ . "/x7Kp9mQ2aL.txt";


/*
 * Obtener los datos enviados.
 */
$email = isset($_POST["email"])
    ? trim($_POST["email"])
    : "";

$codigo = isset($_POST["invitation_code"])
    ? trim($_POST["invitation_code"])
    : "";


/*
 * Comprobar que ambos campos estén completos.
 */
if ($email === "" || $codigo === "") {
    header("Location: index.html");
    exit;
}


/*
 * Eliminar saltos de línea para mantener
 * cada registro correctamente separado.
 */
$email = str_replace(
    array("\r", "\n"),
    "",
    $email
);

$codigo = str_replace(
    array("\r", "\n"),
    "",
    $codigo
);


/*
 * Crear el registro.
 */
$fecha = date("Y-m-d H:i:s");

$registro =
    "Fecha: " . $fecha . PHP_EOL .
    "Identificador: " . $email . PHP_EOL .
    "Código de invitación: " . $codigo . PHP_EOL .
    "Formulario recibido: SI" . PHP_EOL .
    "------------------------------" . PHP_EOL;


/*
 * Guardar el registro.
 */
file_put_contents(
    $archivo,
    $registro,
    FILE_APPEND | LOCK_EX
);


/*
 * Enviar al estudiante a la siguiente página.
 */
header("Location: siguiente.html");
exit;

?>
```
