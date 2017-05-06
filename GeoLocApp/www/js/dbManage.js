angular.module('preparatec.database', [])

.config(function($cordovaSQLite) {

  //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");

  $cordovaSQLite.execute(db, "CREATE TABLE users (userid integer not null primary key AUTOINCREMENT, userName varchar(255),  userPass varchar(255) , playTimes integer, bestScore integer  )");

  $cordovaSQLite.execute(db, "CREATE TABLE items (itemid integer not null primary key AUTOINCREMENT, item varchar(255),itemType varchar(1)   )");

  $cordovaSQLite.execute(db, "CREATE TABLE ItemInfo (`option1`	VARCHAR(255),`option2`	VARCHAR(255),`option3`	VARCHAR(255),`option4`	VARCHAR(255),`option5`	VARCHAR(255),`answer`	VARCHAR(1),`imagePath`	VARCHAR(255))");

  $cordovaSQLite.execute(db, "delete from items");

  $cordovaSQLite.execute(db, "delete from ItemInfo");


  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (1,'Una deuda de “a” colones se cancela en un pago inicial de “b” colones y el saldo en 4 abonos iguales. Entonces el valor de cada abono es:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (2,'¿Cuántas veces aparece el dígito 5 en una lista que contiene a todos los números enteros comprendidos entre 20 y 90?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (3,'Mientras una rueda delantera de un carruaje da 4 vueltas, una rueda trasera da 3.  Si la rueda delantera da 1440 vueltas, la rueda trasera da:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (4,'Un examen de Estudios Sociales consta de 60 preguntas.  Si Ricardo obtuvo 45 respuestas correctas, ¿qué porcentaje de respuestas correctas obtuvo Ricardo en ese examen?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (5,'Un reloj adelanta 5 minutos por hora.  Se pone a funcionar con la hora exacta y 5 horas después marca las 7:15.  ¿Cuál es la hora exacta en ese momento?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (6,'Utilizando solo los dígitos: 2, 4, 5 y 7, ¿cuántos números distintos de tres dígitos se  pueden formar si ningún dígito se repite en cada número?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (7,'Si a 50 se le resta un número determinado, da el mismo resultado que si a 20 se le sumara ese mismo número.  ¿Cuál es ese número?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (8,'Si la suma de cuatro enteros impares consecutivos  es s, entonces en términos de s, el más grande de esos números es:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (9,'¿De cuántas maneras se pueden obtener 52 puntos en fichas de 2 y de 5 puntos, si debe haber al menos una ficha de cada denominación?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (10,'Un bus inicia su recorrido con cierta cantidad de pasajeros.  Si en cada parada se baja la mitad de los pasajeros que en ese momento viajan y si en la quinta parada se bajaron 2 pasajeros, ¿cuántos pasajeros viajaban entre la primera y la segunda parada?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (11,'Todo alumno es un aprendiz. Algunos alumnos son esforzados. Por tanto:','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (12,'Ningún expositor es demagogo. Algunos demagogos son oradores. Por tanto:','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (13,'Los campos se visten de verde después de las primeras lluvias. Han caído ya las primeras lluvias. Camacho (1987)");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (14,'Todos los profesores son instruidos. Algunos escoceses son profesores. ','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (15,'Todas las mascotas alegran la vida. Todos los perros son mascotas. ','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (16,'Todos los científicos son benefactores de la humanidad. Todos los benefactores de la humanidad merecen respeto");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (17,'Todos los caminos rectos del país vecino son seguros. Algunas carreteras del país vecino no son rectas.Por consiguiente:','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (18,'Todo explotador es enemigo de la humanidad. Todo usurero es un explotador. ','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (19,'Juan corre más de prisa que Pedro. Pedro corre más de prisa que Tomás. Fuente: Mitchell, D. (1974). Introducción a la lógica. Por tanto: ','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (20,'Todos los hombres son mortales. Sócrates es un hombre. Fuente: Mitchell, D. (1974). Introducción a la lógica. Por lo tanto, ','2')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (21,'El número que completa la sucesión  3, 7, 15, 31, __ es:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (22,'Se tienen 225 globos rojos, verdes y azules.  Si el 20% del total de los globos son rojos y el 20% de los globos que quedan son verdes, ¿cuántos globos azules hay?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (23,'Un tanque tiene ocupada la cuarta parte de su capacidad. Si se requieren 120 litros para terminar de llenarlo, ¿cuál es la capacidad del tanque?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (24,'La primera olimpiada se celebró en 1896 y se siguieron celebrando cada cuatro años.  Si sólo ha habido tres suspensiones, ¿cuántas olimpiadas se celebraron hasta 1968?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (25,'Una familia compuesta por dos adultos y dos niños visitó un museo.  La entrada para los niños costó un tercio de lo que costó la entrada para los adultos. Si entre los cuatro pagaron ₡4800 ¿Cuánto costó cada entrada para los niños?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (26,'En un grupo de 50 estudiantes, el 70% son varones. Si el 60% de los varones practica algún deporte y el 60% de las mujeres no practica deporte alguno, ¿cuántos estudiantes del grupo en total practican algún deporte?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (30,'Si 2/3 de los votantes de una elección votaron por el señor A, y 1/4 por el señor B, ¿qué parte del total de votos quedó para los otros candidatos?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (31,'Un basquetbolista efectúa 50 tiros a la canasta de los cuales encesta el 60%. Si le quedan 70 tiros, ¿cuántos de éstos debe de encestar para que su número total de aciertos represente el 80% de los tiros?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (32,'Los dígitos de un número son 2, 5  y  b, de manera que en la notación posicional ordinaria el número se puede escribir como  2b5 .  Si este número es divisible por tres, entonces, un posible valor para  b  es:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (33,'Una pelota se deja caer desde una altura de 27 metros, y cada vez que toca el suelo rebota una tercera parte de la altura anterior.  ¿Cuál es la distancia total recorrida por la pelota en el instante en que toca el suelo por tercera vez?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (36,'En un centro educativo hay 840 estudiantes. La razón entre los que están en tercer ciclo y los que cursan el ciclo diversificado es de 4:3, ¿cuántos estudiantes cursan tercer ciclo? ','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (37,'Un comerciante vende 300 camisas y 150 pantalones, por lo que recibe    ₡3 600 000. Si el precio de cada pantalón es el doble de cada camisa, ¿cuánto cuesta cada pantalón?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (38,'Si  a > b;  c > d;  b > c;  d > e ¿Cuál de las expresiones siguientes es verdadera?','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (39,'Jorge tiene  7 libros menos que María, Ana tiene el triple de libros  que Jorge. Si María tiene 2n libros, el número de libros que tiene Ana es:','1')");

  $cordovaSQLite.execute(db, "INSERT INTO `Items` VALUES (40,'Si la razón entre las áreas de dos círculos es 4/9, entonces, la razón entre sus respectivos radios es:','1')");

  /*
  Falta insertar más preguntas
  */


  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('a-(b/4)         ','(a/4)-b','(a-b)/4','(a+b)/4','a/4','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('7','8','16','17','18','4',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('360  vueltas.','480  vueltas.','1 080  vueltas.','1 440  vueltas.','1 920  vueltas.','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('15%','25%','27%','33%','75%','5',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('6:50','6:55','7:10','7:35','7:40','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('24 ','18','16','8','4','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('15','-15','30','-30','35','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('(s-12)/4','(s-6)/4','(s+6)/4','(s+12)/4','(s+16)/4','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('1','2','3','4','5','5',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('8','10','16','64','32','5',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Algunos alumnos no son esforzados.','Algunos alumnos no son aprendices.','Algunas personas esforzadas no son alumnos.','Algunas personas esforzadas no son aprendices. ','Algunos aprendices son esforzados.','5',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Todo orador es demagogo.','Algunos oradores son expositores.','Algunos demagogos no son expositores. ','Algunos oradores no son demagogos. ','Ningún expositor es orador.','2',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Los campos no están vestidos de verde.','Los campos aún no se visten de verde.','Los campos se han vestido ya de verde. ','Las primeras lluvias secan los campos.','Las primeras lluvias se visten de verde.','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Algunas mascotas alegran la vida.','Todos los perros entristecen la vida.','Algunas mascotas entristecen la vida.','Ningún perro entristece la vida.','Ninguna mascota es perro.','4',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Todos los científicos merecen respeto.','Algunos científicos benefician a la humanidad.','Ningún científico merece respeto.','Ningún benefactor de la humanidad es científico.','Todos los benefactores de la humanidad son científicos.','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Ningún camino del país vecino es recto.','Algunas carreteras del país vecino no son seguras.','Todas las carreteras del país vecino son seguras','Ninguna carretera del país vecino es segura.','Todas las carreteras del país vecino son rectas.','2',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Algunos usureros son enemigos de la humanidad.','Ningún usurero es enemigo de la humanidad.','Todo usurero es enemigo de la humanidad.','Todo enemigo de la humanidad es usurero.','Ningún enemigo de la humanidad es usurero.','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Pedro corre más de prisa que Juan.','Tomás corre más de prisa que Juan.','Juan corre más de prisa que Tomás.','Juan no corre más de prisa que Tomás.	','Tomás no corre más de prisa que Pedro.','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('Sócrates es mortal.','Sócrates no es hombre.','Todos los hombres son Sócrates.','Todos los mortales son Sócrates.','Ningún mortal es hombre.','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('51','55','61','63','65','4',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('36','90','135','144','180','4',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('90 litros','150 litros','160 litros','360 litros','480 litros','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('15','16','17','18','19','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('₡600','₡800','₡1200','₡1600','₡1800','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('30','27','25','23','20','2',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('1/12','11 / 12','4/7','3/4','1/3','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('56','66','50','40','24','2',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('3','4','6','7','8','5',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('81  metros','51  metros','39  metros','26  metros','13  metros','2',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('280','360','480','560','630','3',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('₡ 12 000','₡ 10 000','₡   8000','₡   6000','₡   4800','1',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('e > a   ','d > b','c > a ','a > e   ','d > a','4',NULL)");

  $cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('5n-7','6n-7','2n-21','3(2n-7)','(7-3n) + 2n','4',NULL)");

  $cordovaSQLite.execute(db, " INSERT INTO `ItemInfo` VALUES ('9/4','3/2','16/81',' 2/3','3/5','4',NULL)");

  //$cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('la longitud de la cerca en total no sobrepasa los 500 metros.','el área del terreno rectangular es exactamente 1000 metros cuadrados.','la suma de los perímetros de los dos terrenos no debe exceder los 625 metros.','el área del terreno triangular es igual al área del terreno rectangular.','uno de los lados del terreno triangular mide 125 metros.','3',NULL)");

  //$cordovaSQLite.execute(db, "INSERT INTO `ItemInfo` VALUES ('el cuadrado tiene el doble del área del hexágono.','el hexágono tiene el doble de área del cuadrado.','el área de ambos es igual.','el hexágono tiene mayor área que el cuadrado.','el cuadrado tiene mayor área que el hexágono.','5',NULL)");
  /*
  36
  */


});
