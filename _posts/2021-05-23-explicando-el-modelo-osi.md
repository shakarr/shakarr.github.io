---
layout: single
title:  Explicando el modelo OSI y TCP/IP
excerpt: "Entender como funciona la red es uno de los principio basicos para todo aquel que este
iniciando en el mundo de la informática, y mas aún, en el mundo de la seguridad informática. En este
post aprenderas los conocimiento básicos sobre el modelo OSI y el TCP/IP"
date: 2021-05-23
classes: wide
header:
    teaser: /assets/images/explicacion-del-modelo-osi/banner-osi.png
    teaser_home_page: true
categories:
    - Explicaciones
tags:
    - Tutoriales
    - Red
    - OSI
    - Capa
    - Internet
---
<p align="center">
<img src="/assets/images/explicacion-del-modelo-osi/osi-image-1.jpg" width="50%">
</p>

Entender como funciona la red es algo muy importante para cualquier informático que se precie, pues bien aquí aprenderas los conocimientos básicos sobre el tema.

# El modelo OSI

El modelo OSI (Open Systems Interconnection), traducido del ingles, **sistemas abiertos de interconección**, es un modelo estandarizado que se usa para demostrar la teoría que hay detrás de las redes de ordenadores. En la práctica, es decir en el mundo real se usa el modelo TCP/IP ya que es más compacto y más fácil obtener una comprensión inicial sobre el modelo OSI

El modelo OSI consta de siete capas:

- Aplicacion
- Presentación
- Sesión
- Transporte
- Red
- Enlace
- Física

Así a simple vista parece un tostón aprenderselos todos, pero hay muchos memónicos que te pueden ayudar a memorizarlo.

Uno podría ser este:

> **A**nxious **P**ale **S**hakespeare **T**reated **N**ervous **D**runks **P**atiently

Bien una vez que hemos visto un poco por encima cuantas capas lo componen, vamos a ver más en profundidad que hace cada capa.

## Capa 7 - Aplicación

La capa de aplicación del modelo OSI esencialmente proporciona opciones de red a los
programas que se ejecutan en un ordenador. Funciona casi exclusivamente con
aplicaciones, proporcionando una interfaz que pueden utilizar para transmitir datos.
Cuando los datos se entregan a la capa de aplicación, se transmiten a la capa de
presentación.

## Capa 6 - Presentación

La capa de presentación recibe datos de la capa de aplicación. Estos datos tienden a
estar en un formato que la aplicación comprende, pero no necesariamente en un formato
estandarizado que pueda ser entendido por la capa de aplicación en el ordenador
receptor. La capa de presentación traduce los datos a un formato estandarizado,
además de manejar cualquier cifrado, compresión u otras transformaciones de los datos.
Con esto completo, los datos se pasan a la capa de sesión.

## Capa 5 - Sesión

Cuando la capa de sesión recibe los datos con el formato correcto de la capa de
presentación, busca si puede establecer una conexión con el otro ordenador a través
de la red. Si no puede, envía un error y el proceso no continúa. Si se puede establecer
una sesión, entonces es el trabajo de la capa de sesión mantenerla, así como cooperar
con la capa de sesión de la PC remota para sincronizar las comunicaciones. La
capa de sesión es particularmente importante ya que la sesión que crea es única para la
comunicación en cuestión. Esto es lo que le permite realizar múltiples solicitudes a
diferentes puntos finales simultáneamente sin que se mezclen todos los datos (piense en
abrir dos pestañas en un navegador web al mismo tiempo). Cuando la capa de sesión ha
registrado con éxito una conexión entre el host y la PC remota, los datos se
transmiten a la Capa 4: la Capa de transporte.

## Capa 4 - Transporte 

La capa de transporte es una capa muy interesante que cumple numerosas funciones
importantes. Su primer propósito es elegir el protocolo por el que se transmitirán los datos.
Los dos protocolos más comunes en la capa de transporte son TCP (Protocolo de control
de transmisión) y UDP (Protocolo de datagramas de usuario); con TCP, la transmisión se
basa en la conexión, lo que significa que se establece y se mantiene una conexión entre
los ordenadores durante la duración de la solicitud. Esto permite una transmisión
confiable, ya que la conexión se puede utilizar para garantizar que todos los paquetes
lleguen al lugar correcto. Una conexión TCP permite que los dos ordenadores
permanezcan en comunicación constante para garantizar que los datos se envíen a una
velocidad aceptable y que los datos perdidos se reenvíen. Con UDP, ocurre lo contrario;
Los paquetes de datos se lanzan esencialmente a la PC receptora; si no puede
mantener el ritmo, ese es su problema (es por eso que una transmisión de video a través
de algo como Skype se puede pixelar si la conexión es mala). Lo que esto significa es que
normalmente se elegiría TCP para situaciones en las que se favorece la precisión sobre la
velocidad (por ejemplo, transferencia de archivos o carga de una página web), y UDP se
usaría en situaciones donde la velocidad es más importante (por ejemplo, transmisión de
video).Con un protocolo seleccionado, la capa de transporte luego divide la transmisión en 
partes del tamaño de un bocado (a través de TCP se les llama segmentos, a través de 
UDP se les llama datagramas), lo que facilita la transmisión del mensaje con éxito.

## Capa 3 - Red

La capa de red se encarga de localizar el destino de su solicitud. Por ejemplo, Internet es
una red enorme; cuando desea solicitar información de una página web, es la capa de red
la que toma la dirección IP de la página y determina la mejor ruta a seguir. En esta etapa,
estamos trabajando con lo que se conoce como direccionamiento lógico (es decir,
direcciones IP) que todavía están controladas por software. Las direcciones lógicas se
utilizan para ordenar las redes, categorizarlas y permitirnos ordenarlas adecuadamente.
Actualmente, la forma más común de direccionamiento lógico es el formato IPV4, con el
que probablemente ya esté familiarizado (es decir, 192.168.1.1 es una dirección común
para un enrutador doméstico).

## Capa 2 - Enlace

La capa de enlace de datos se centra en el direccionamiento físico de la transmisión.
Recibe un paquete de la capa de red (que incluye la dirección IP de la PC
remota) y agrega la dirección física (MAC) del punto final receptor. Dentro de cada
PC habilitada para red hay una tarjeta de interfaz de red (NIC) que viene con
una dirección MAC (control de acceso a medios) única para identificarla.
Las direcciones MAC son establecidas por el fabricante y literalmente grabadas en la 
tarjeta; no se pueden cambiar, aunque se pueden falsificar. Cuando se envía información 
a través de una red, en realidad es la dirección física la que se utiliza para identificar 
dónde exactamente enviar la información.
Además, también es trabajo de la capa de enlace de datos presentar los datos en un 
formato adecuado para la transmisión.
La capa de enlace de datos también cumple una función importante cuando recibe datos, 
ya que verifica la información recibida para asegurarse de que no se haya corrompido 
durante la transmisión, lo que bien podría suceder cuando los datos son transmitidos por 
la capa 1: la capa física.

## Capa 1 - Física

La capa física se reduce al hardware del ordenador. Aquí es donde se envían y
reciben los pulsos eléctricos que componen la transferencia de datos a través de una red.
El trabajo de la capa física es convertir los datos binarios de la transmisión en señales y
transmitirlos a través de la red, así como recibir señales entrantes y convertirlas
nuevamente en datos binarios.

# Encapsulación

A medida que los datos se transmiten por cada capa del modelo, al inicio de la
transmisión se agrega más información que contiene detalles específicos de la capa en
cuestión. Como ejemplo, el encabezado agregado por la capa de red incluiría cosas como
las direcciones IP de origen y destino, y el encabezado agregado por la capa de
transporte incluiría (entre otras cosas) información específica del protocolo que se está
utilizando. La capa de enlace de datos también agrega una parte al final de la transmisión,
que se utiliza para verificar que los datos no se hayan corrompido durante la transmisión;
esto también tiene la ventaja adicional de una mayor seguridad, ya que los datos no
pueden ser interceptados y manipulados sin romper el tráiler. Todo este proceso se
denomina encapsulación; el proceso mediante el cual los datos se pueden enviar de una
PC a otra.

<img src="/assets/images/explicacion-del-modelo-osi/osi-diagram.jpeg" width="100%">

Observa que los datos encapsulados reciben un nombre diferente en diferentes pasos del
proceso. En las capas 7, 6 y 5, los datos se denominan simplemente datos. En la capa de
transporte, los datos encapsulados se denominan segmento o datagrama (dependiendo
de si se ha seleccionado TCP o UDP como protocolo de transmisión). En la capa de red,
los datos se denominan paquete. Cuando el paquete pasa a la capa de enlace de datos,
se convierte en una trama y, cuando se transmite a través de una red, la trama se ha
dividido en bits.


Cuando el mensaje es recibido por el segundo ordenador, invierte el proceso,
comenzando en la capa física y trabajando hasta llegar a la capa de aplicación,
eliminando la información agregada a medida que avanza. Esto se conoce como
desencapsulación. Como tal, puede pensar que las capas del modelo OSI existen dentro
de cada PC con capacidades de red. Si bien en la práctica no es tan claro,
todas los ordenadores siguen el mismo proceso de encapsulación para enviar datos y
desencapsularlos al recibirlos.


Los procesos de encapsulación y desencapsulación son muy importantes, no solo por su
uso práctico, sino también porque nos brindan un método estandarizado para enviar
datos. Esto significa que todas las transmisiones seguirán constantemente la mismametodología, lo que permitirá que cualquier dispositivo habilitado para la red envíe una
solicitud a cualquier otro dispositivo accesible y se asegure de que se entenderá,
independientemente de que sean del mismo fabricante; utilizar el mismo sistema
operativo; o cualquier otro factor

# El modelo TCP/IP

El modelo TCP / IP es, en muchos sentidos, muy similar al modelo OSI. Es unos años
más antiguo y sirve como base para la creación de redes en el mundo real. El modelo
TCP / IP consta de cuatro capas: aplicación, transporte, Internet e interfaz de red. Entre
ellos, cubren la misma gama de funciones que las siete capas del modelo OSI.

- Aplicacion
- Transporte
- Internet
- Interfaz de red

Nota: Algunas fuentes recientes dividen el modelo TCP / IP en cinco capas, dividiendo la
capa de interfaz de red en capas de enlace de datos y física (como con el modelo OSI).
Esto es aceptado y bien conocido; sin embargo, no está definido oficialmente (a diferencia
de las cuatro capas originales que se definen en RFC1122).

A estas alturas(si es que llegaste aquí sin salir) te estarás preguntando porque te solté todo el rollo del modelo OSI si en realidad no se usa para nada en el mundo real. La respuesta es sencilla, el modelo OSI(debido a que es menos condensado y más rígido que el modelo TCP/IP) tiende a ser más fácil para aprender la teoría inicial de redes. Bueno una vez aclarado esto continuemos.

Los dos modelos coinciden con algo como esto:

<p align="center">
<img src="/assets/images/explicacion-del-modelo-osi/osi-model-comparation.png" width="auto">
</p>

Los procesos de encapsulación y desencapsulación funcionan exactamente de la misma
manera con el modelo TCP / IP que con el modelo OSI. En cada capa del modelo TCP /
IP se agrega un encabezado durante la encapsulación y se elimina durante la
desencapsulación. Ahora vayamos al lado práctico de las cosas.

Un modelo en capas es excelente como ayuda visual: nos muestra el proceso general de 
cómo se pueden encapsular y enviar los datos a través de una red, pero ¿cómo sucede 
realmente?
Cuando hablamos de TCP / IP, está muy bien pensar en una tabla con cuatro capas, pero
en realidad estamos hablando de un conjunto de protocolos: conjuntos de reglas que
definen cómo se llevará a cabo una acción. . TCP / IP toma su nombre de los dos más
importantes: el Protocolo de control de transmisión (que mencionamos anteriormente en
el modelo OSI) que controla el flujo de datos entre dos puntos finales, y el Protocolo de
Internet, que controla cómo se direccionan los paquetes. y enviado. Hay muchos más
protocolos que componen la suite TCP / IP; cubriremos algunos de estos en tareas
posteriores. Por ahora, sin embargo, hablemos de TCP.
Como se mencionó anteriormente, TCP es un protocolo basado en conexión. En otras
palabras, antes de enviar datos a través de TCP, primero debe formar una conexión
estable entre las dos PC. El proceso de formación de esta conexión se llama
apretón de manos de tres vías.
Cuando intenta establecer una conexión, su ordenador primero envía una solicitud
especial al servidor remoto indicando que desea inicializar una conexión. Esta solicitud
contiene algo llamado SYN (abreviatura de sincronizar), que esencialmente hace el primer
contacto al iniciar el proceso de conexión. Entonces, el servidor responderá con un
paquete que contiene el bit SYN, así como otro bit de "reconocimiento", llamado ACK.
Finalmente, su ordenador enviará un paquete que contiene el bit ACK por sí mismo,
confirmando que la conexión se ha configurado correctamente. Con el protocolo de enlace
de tres vías completado con éxito, los datos se pueden transmitir de manera confiable
entre las dos PC. Todos los datos que se pierden o se corrompen en la
transmisión se reenvían, lo que conduce a una conexión que parece no tener pérdidas.


<p align="center">
<img src="/assets/images/explicacion-del-modelo-osi/osi-model-work.png" width="auto">
</p>

No voy a entrar en más detalles sobre como funciona esto paso a paso, con esto es suficiente para entender como funciona, solo nos basta con saber que el protocolo de enlace de tres vías debe llevarse a cabo
antes de que se pueda establecer una conexión mediante TCP.