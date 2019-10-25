# QUIZ Game

Juego de preguntas realizado empleando la tecnología React para la asignatura IWEB. Se ha desarrollado una Single Page Application que permie jugar a un juego Quiz, crado en la asignatura de CORE.
El juego consiste en contestar 10 preguntas aleatorias procedentes del juego de Quiz, que se descargan de un servidor web. Se muestran sucesivamente las distintas preguntas al usuario, que podrá ir contestando a cada una de ellas. Al terminar, el usuario pulsará el botón de “Submit” para evaluar sus respuestas y obtener su puntuación final. La evaluación de las respuestas se realiza en la propia aplicación web.

Además del juego estándar, se presentan los siguientes elementos: 

 - Se ha añadido un índice de preguntas en forma de menú desplegable en la esquina superior derecha, que aparece al pasar el ratón por encima. Muestra 10 botones que permiten navegar hacia cada una de las preguntas. 

 - Se muestra un gif de carga mientras se descargan las preguntas del servidor, o cuando no haya 10 preguntas. 
 
 - Se ha añadido un botón "Check score" en la parte inferior, que muestra un popup con nuestra puntuación. Tan sólo se puede acceder a él cuando finaliza el tiempo o cuando entregamos nuestras respuestas. Muestra un mensaje distinto si hemos aprobado o suspendido el quiz.
 
 - Una vez finaliza el juego, se ha añadido una funcionalidad que muestra un mensaje distinto para cada pregunta en función de si la respuesta introducida es correcta o no. En lugar de mostrar solo la puntuación al finalizar el juego, se ha elegido implementar esta funcionalidad ya que nos pareció original y de utilidad, y la puntuación se comprobará con el elemento explicado en el punto anterior. 

 - Botón de reset que pide un conjunto nuevo de preguntas al servidor y reinicie el juego: situado en la barra superior. 
 
 - Cuenta atrás que limita el tiempo que tiene el usuario para responder las preguntas y termine el juego si se acaba el tiempo:  se ha establecido un tiempo de 120 segundos. Para ello se ha creado en el estado un timer que almacena el tiempo restante. Una vez el tiempo llega a 0, finaliza el quiz. 
