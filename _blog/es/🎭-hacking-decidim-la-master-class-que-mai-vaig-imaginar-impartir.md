---
layout: blog
title: "🎭 Hacking Decidim: la master class que nunca imaginé impartir"
slug: hacking_decidim
author: Elvia Benedith
tags:
  - HackingDecidim
  - FemCodersClub
image: /assets/img/pokecode_decidim.jpg
locale: es
reading_time: 5
order: 5
---
Si me preguntas cómo están yendo las cosas en mi trabajo, podría resumirlo con una expresión sencilla: *so far, so good*.

Ha sido un año intenso, tanto a nivel personal como profesional. En casa hemos dado la bienvenida a un nuevo miembro de la familia y ahora somos cuatro. Un cambio enorme que ha transformado muchas rutinas, prioridades y perspectivas. Al mismo tiempo, la empresa también ha crecido. Cuando empecé éramos menos personas; ahora somos cinco. Y aunque pueda parecer un dato simple, para mí es una señal clara de que estamos avanzando.

Con el crecimiento llegan nuevas oportunidades y también nuevos aprendizajes. En mi caso, una de las cosas que más valoro es tener a mi alrededor a tres compañeros senior de los que aprender cada día. Tener referentes cercanos, observar cómo trabajan y poder apoyarme en su experiencia es un privilegio que intento aprovechar al máximo.

Aun así, ha sido un año de adaptación. Gran parte de él estuvo marcado por una baja relacionada con la llegada de este nuevo miembro de la familia. Después de casi seis meses sin tocar el ordenador, la reincorporación vino acompañada de ilusión, pero también de muchos miedos.

Recuerdo perfectamente mi primer *issue* al volver. Me preguntaron si prefería empezar con una tarea compleja o si me sentía más cómoda retomando el ritmo con algo más sencillo. Mi respuesta fue clara: quería comprobar cómo estaba. Quería saber qué seguía ahí.

Porque después de varios meses desconectada, incluso las cosas más básicas generan dudas reales. ¿Recordaré todos los comandos? ¿Cómo levantaba el entorno? ¿Dónde estaba aquella configuración? Son preguntas que probablemente muchas personas se han hecho alguna vez al regresar tras una pausa larga.

Y entonces ocurrió algo bonito.

Poco a poco, todo fue volviendo. Los conceptos, las rutinas, la confianza. La magia seguía ahí. Hoy puedo decirlo con una sonrisa porque comprobé que no había desaparecido; simplemente necesitaba tiempo para despertar de nuevo.

En este proceso también he incorporado algo que hace un año apenas utilizaba: la inteligencia artificial como herramienta de trabajo. Bien utilizada, se ha convertido en una gran aliada para aprender, desbloquear problemas y ganar eficiencia. Además, trabajando en proyectos *open source*, existen programas que permiten acceder gratuitamente a herramientas avanzadas, algo que sin duda facilita la experimentación y el aprendizaje.

Paralelamente, sigo formando parte de una asociación cuyo objetivo es reducir la brecha digital de género y empoderar a las mujeres dentro del sector tecnológico. Durante mi baja también estuve algo más alejada de la actividad diaria. Seguía los eventos, comentaba publicaciones y mantenía el contacto desde la distancia, pero no participaba en la organización ni en la planificación.

La vuelta tampoco fue inmediata ni sencilla.

Aunque nunca me fui realmente, sentía que había perdido parte de mi espacio. Aparecieron dudas que muchas personas reconocerán: el síndrome de la impostora, esa sensación de preguntarte si sigues mereciendo estar ahí o si todavía tienes algo valioso que aportar.

Por suerte, la respuesta llegó poco a poco. Un evento después de otro. Una reunión después de otra. Y casi sin darme cuenta, volví a sentirme parte activa de la asociación.

Todo este contexto es importante porque ayuda a entender por qué esta experiencia significó tanto para mí.

En un artículo anterior conté cómo conocí a la empresa donde trabajo gracias a una *master class* que impartieron durante un *bootcamp* de desarrollo *full stack* dirigido a mujeres.

Si te perdiste esa historia, puedes leerla aquí:  
[**How is it going? My first month working as a junior full stack developer**](https://medium.com/@femcodersclub/how-is-it-going-my-first-month-working-as-a-junior-full-stack-developer-6e29cf8df46e)

Pues bien, hace unas semanas tuve la oportunidad de impartir esa misma *master class*.

Todavía necesito unos segundos para procesarlo.

**Yo era ahora quien impartía la misma sesión que años atrás me había permitido descubrir la empresa en la que hoy trabajo**.

La propuesta surgió desde la propia empresa. Queríamos organizar un evento en colaboración con la asociación Femcoders club y me ofrecieron liderar la iniciativa. Me encargué de coordinar la organización, hablar con los responsables del local donde se celebraría el evento, preparar la difusión y revisar todos los detalles necesarios para que el evento saliera adelante. El evento estaba abierto a cualquier persona interesada en asistir, independientemente de su experiencia o trayectoria profesional.

Unos días antes, tuve la oportunidad de participar en un podcast para hablar sobre mi experiencia profesional, mi trabajo actual y mi papel como cofundadora de la asociación Femcoders club. Esta intervención también nos sirvió para dar visibilidad a la *master class*.

Si te interesa escuchar la conversación completa, puedes encontrar el episodio aquí:

- [**Youtube**](https://www.youtube.com/watch?v=X1iuJGtZXok)
- [**XRCB**](https://www.barcelona.cat/xrcb/ca/podcast/la-revolucio-de-les-programadores)

La sesión conservaba la misma esencia, aunque aprovechamos para actualizar el repositorio, revisar los equipos que utilizaríamos durante la sesión y poner al día la presentación. Por supuesto, conté con el apoyo constante de mis compañeros, algo que hizo que todo el proceso resultara mucho más llevadero.

Durante la *master class* enseñamos cómo "hackear" Decidim, una plataforma de participación democrática digital de software libre utilizada por instituciones, administraciones públicas y organizaciones para fomentar la participación ciudadana.

Pokecode, la empresa donde trabajo, es uno de los colaboradores de Decidim y está especializada en el desarrollo de soluciones de participación ciudadana y democracia digital. La sesión estaba pensada para que cualquier persona pudiera experimentar con el código, entender cómo funciona la plataforma y realizar pequeñas personalizaciones en un entorno local.

Y entonces llegó el día.

Durante la sesión sentí que el tiempo pasaba a una velocidad increíble. Miré el reloj y ya habían transcurrido dos horas sin darme cuenta.

Lo disfruté muchísimo.

Y si asististe al evento, o simplemente te apetece experimentar con lo que vimos durante la sesión, he recopilado aquí los pasos para reproducir el entorno de trabajo que utilizamos.

## ¿Quieres probarlo por tu cuenta?

### Requisitos

- Docker Desktop instalado y funcionando en tu ordenador.
- Un editor de código. Nosotros recomendamos Visual Studio Code:  
  https://code.visualstudio.com/

### Descarga y arranque del proyecto

Abre una terminal y ejecuta:

```bash
git clone https://github.com/openpoke/decidim-hacks.git
cd decidim-hacks
git pull
docker compose up
```

Encontrarás más información en el propio repositorio.

Una vez iniciado el entorno, podrás acceder a:

```bash
https://localhost:3000
https://localhost:8080
```

Y si quieres explorar el proyecto:

```bash
https://github.com/openpoke/decidim-hacks
```

Dentro del repositorio encontrarás distintos ejercicios para realizar localmente y seguir aprendiendo a tu ritmo.

Si tienes cualquier duda o te gustaría que organizáramos esta *master class* nuevamente en el futuro, no dudes en ponerte en contacto con nosotros.

![Foto de la master class](/assets/img/hack_decidim.jpeg)

Después vi las fotografías del evento y confirmé una sensación que ya tenía durante la sesión: en casi todas aparezco sonriendo. Pero no una sonrisa cualquiera. Esa sonrisa genuina que aparece cuando estás cómoda, cuando disfrutas de lo que haces y cuando sientes que estás exactamente donde quieres estar.

Más allá de la charla, este evento ha supuesto un impulso enorme para mi confianza. Ha sido un recordatorio de todo lo recorrido durante este último año y de la importancia de las personas que me acompañan en el camino.

Porque detrás de esta experiencia hubo apoyo, confianza y muchas personas diciéndome, de una forma u otra: "adelante, puedes hacerlo".

Y lo más bonito de todo es que sentí que realmente estaban conmigo.

Quizá por eso esta experiencia ha significado tanto para mí. Porque no fue solo una *master class*. Fue la confirmación de que, incluso después de una pausa, de los miedos y de las dudas, seguimos creciendo.

A veces solo necesitamos darnos la oportunidad de comprobarlo.
