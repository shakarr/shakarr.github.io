---
layout: single
title:  Lame HTB Writeup
excerpt: "En este post te daré un writeup detallado de la máquina lame de HTB"
date: 2021-12-15
classes: wide
header:
    teaser: /assets/images/lame-writeup-htb/lame-banner.png
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
<img src="/assets/images/lame-writeup-htb/lame-banner.png" width="50%">
</p>

## 1. Introduction

Lame es la primera máquina publicada en htb, y require solo de un exploit para obtener el acceso root.

Usaremos las siguientes herramientas para esta prueba:

- nmap
- metasploit
- searchsploit

## 2. Enumeration

Primero como siempre haremos un **ping** a la máquina para comprobar que la conexión este correcta entre el **vpn** y **htb**, para ello haremos uso del siguiente comando: ``ping 10.10.10.3``

<p align="center" >
    <img src="/assets/images/lame-writeup-htb/img1.png" width="100%">
</p>

y como vemos estamos conectados correctamente.

Ahora tocaría hacer el scaneo con **nmap**, usaremos el siguiente comando: ``nmap -sC -sV -Pn 10.10.10.3``

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img2.png" width="100%">
</p>

como vemos tenemos varias opciones por donde atacar, ya sea por ftp, samba etc...

## 3. Exploit

Vamos a buscar con la utilidad **searchsploit** información sobre samba; usando el comando ``searchsploit samba 3.0.20`` obtendremos una lista con las vulnerabilidades asociadas como se peude ver en la sigueitne imagen:

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img3.png" width="100%">
</p>

como vemos hay una vulnerabilidad llamada **'Username' map script Command Execution** la cual puede ser explotada con metasploit, así que vamos a abrir metasploit.

Una vez dentro de metasplot vamos a buscar con el camando ``search samba 3.0.20`` la vulnerabilidad para saber el exploit que tenemos que usar.

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img4.png" width="100%">
</p>

vamos a decirle a metasploit que queremos usar dicha vulnerabilidad con el comando ``use exploit/multi/samba/usermap_script`` y vamos a ver con el comando ``show options`` que nos pide el exploit.

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img5.png" width="100%">
</p>

vamos a configurar el **RHOSTS** y el **LHOST**, el rhost será la máquina lame y el lhost la ip que nos probee el vpn de htb(haciendo uso de ``ifconfig`` la puedes ver).

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img6.png" width="100%">
</p>

ya ahora solo quedaría hacer un ``run``

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img7.png" width="100%">
</p>

y como vemos ya tenemos una shell dentro del sistema y para colmo somos root, ahora solo quedaría buscar el **flag** del user y del root, para ello nos iremos a **/home/makis** y estará el flag del usuario

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img8.png" width="100%" >
</p>

y para el de root nos iremos a la carpeta **root**

<p align="center">
    <img src="/assets/images/lame-writeup-htb/img9.png" width="100%">
</p>