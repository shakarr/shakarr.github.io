---
layout: single
title:  Beep HTB Writeup
excerpt: "En este post te daré un writeup detallado de la máquina beep de HTB"
date: 2021-12-14
classes: wide
header:
    teaser: /assets/images/beep-writeup-htb/beep-banner.png
    teaser_home_page: true
categories:
    - HTB Writeup
tags:
    - Tutoriales
    - HTB
    - Machine
    - hacking
---

<p align="center">
<img src="/assets/images/beep-writeup-htb/beep-banner.png" width="50%">
</p>

## 1. Enumeration

Vamos a empezar como siempre con la enumeración de puertos, vamos a usar el siguiente comando: ``nmap -sC -sV -Pn -oA nmap/result 10.10.10.7``.

<p align="center">
<img src="/assets/images/beep-writeup-htb/img1.png" width="100%">
</p>

Vamos a navegar a la url ya que vemos que el peurto 80 esta abierto, pero si navegamos a la url no saldrá algo como lo siguiente:

<p align="center">
<img src="/assets/images/beep-writeup-htb/img2.png" width="100%">
</p>

a sí que le daremos que aceptamos los riesgos y seguiremos adelante. Una vez echo esto, vemos que tenemos un panel de login del cual no tenemos credenciales

<p align="center">
<img src="/assets/images/beep-writeup-htb/img3.png" width="100%">
</p>

Vamos a hacer un enumerado de la web usando la herrameinta **dirbuster**

<p align="center">
<img src="/assets/images/beep-writeup-htb/img4.png" width="100%">
</p>

Una vez acabado el análisis, vemos que la herramienta a encontrado un gran cantidad de direcotrios que pueden ser explotados

<p align="center">
<img src="/assets/images/beep-writeup-htb/img5.png" width="100%">
</p>

## 2. Explotation

Vamos a buscar con **searchsploit** ifnromación acerca de elastic, para ello usaremos ``searchsploit elastix``

<p align="center">
<img src="/assets/images/beep-writeup-htb/img6.png" width="100%">
</p>

vemos que hay una serie de vulenrabilidades bastante grandes, en este caso vamos a echarle un vistado a **graph.php**, si usamos el comando ``searchsploit -x 37637.pl``

<p align="center">
<img src="/assets/images/beep-writeup-htb/img7.png" width="100%">
</p>

obtenemos un sumario con todo lo relacionado con el exploit y el código.

El código para el **LFI Exploit** seía el siguiente: **/vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action**

Un atacante puede utilizar la inclusión de archivos locales (LFI) para engañar a la aplicación web para que exponga o ejecute archivos en el servidor web. Un ataque LFI puede provocar la divulgación de información, la ejecución remota de código o incluso Cross-site Scripting (XSS).

Vamos a probar el exploit, para ello en el navegador introduciremos la ip de la máquina seguido del exploit, de la siguiente manera ``https://10.10.10.7/vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action`` y vemos que obtenemos una cantidad de texto casi ilegible pero vemos que hay información útil

<p align="center">
<img src="/assets/images/beep-writeup-htb/img8.png" width="100%">
</p>

si le damos e examianr código fuente obtendremos una mejro visión del documento

<p align="center">
<img src="/assets/images/beep-writeup-htb/img9.png" width="100%">
</p>

Navegando un poco en el archivo, encontre la siguiente contraseña **jEhdIekWmdjE**, vamos a tratar de conectarnos por ssh, ya que como vimos en el análisis con nmpa el puerto 22 esta abierto.

<p align="center">
<img src="/assets/images/beep-writeup-htb/img10.png" width="100%">
</p>

y como vemos somos root, ahora solo quedaría obtener los flags