---
layout: single
title:  Creando 1000+ hotsposts
excerpt: "En este post te explico brevemente un ataque muy comun con mdk3 en el cual crearemos alrededor de 1000 puntos de acceso"
date: 2021-05-26
classes: wide
header:
    teaser: /assets/images/creando-1000-hostpost/banner.webp
    teaser_home_page: true
categories:
    - Explicaciones
tags:
    - Tutoriales
    - Redes
    - Ataques
    - mdk3
    - hacking
---

<p align="center">
<img src="/assets/images/creando-1000-hostpost/mdk-feature.jpg" width="50%">
</p>

En este post vamos a tratar uno de los muchos metodos de como crear un hotspost, para esta prueba utilizaremos **mdk3** y lo que haremos será un ataque **BEACOON FLOOD** donde lo que tendrá por objetivo es crear un montón de puntos de acceso con el mismo nombre **ESSID** que la red a la que queramos dañar pero con distinta **MAC** con esto conseguirmos o bien echar a los usuarios de la red o hacer que la conexión vaya un peor.

Una cosa que podemos hacer con esta herramienta es crear puntos de acceso con nombres personalizados, en nuestro caso vamos a crear alrededor de 1000 puntos de acceso con un fichero el cuál generará un ESSID 'Wifi_Gratis' seguido de un número al final que se irá incrementando, bien manos a la obra.

Primero vamos a crear un sencillo script que haga lo de los puntos de acceso, aqui te dejo el código:

```
#!/bin/bash

contador=0

until [ "$contador" -gt "1000" ]; do
    echo "Wifi_Gratis$contador" >> redes.txt
    let contador+=1
done
```

Sencillo cierto, solo estamos haciendo un buclee que cree los 1000 puntos de acceso, les asigna el número, lo incrementa y los va guardando en un fichero llamado **redes.txt** que será el que usaremos con mdk3.

> NOTA: Acuerdate de cuardarlo con extension .sh

Si quereis podeis hacer un cat depués de haberlo ejecutado el .sh `./nombrefichero.sh`(por si no te acuerdas) y os debería de salir algo como esto

<p align="center">
<img src="/assets/images/creando-1000-hostpost/image1.png" width="50%">
</p>

Bien ahora solo quedaría realizar el ataque, para ello os recuerdo que tendreis que estar en modo monitos con vuestra tarjeta de red, solo tendremos que usar el siguiente comando `sudo mdk3 wlan0mon b -f redes.txt -a -s 1000`

> NOTA: donde pone wlan0mon será vuestra tarjeta de red en modo monitor

Como resultado, visto desde el movil tenemos esto

<p align="center">
<img src="/assets/images/creando-1000-hostpost/imag2.png" width="50%">
</p>

