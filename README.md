# ToDoListWithAI (Node + Express)

##  Descripción del Proyecto

Este es un proyecto simple de una **API REST para gestionar tareas (ToDo List)** usando únicamente **JavaScript, Node.js y Express**, sin base de datos.
Las tareas se almacenan **en memoria**, por lo que se reinician cada vez que se reinicia el servidor.

La API permite realizar operaciones **CRUD** completas sobre una entidad `Task`:

- `id` (número único)
- `title` (texto)
- `description` (texto)
- `completed` (booleano)

### Endpoints disponibles

| Método | Ruta         | Descripción                 |
| ------ | ------------ | --------------------------- |
| POST   | `/tasks`     | Crear una nueva tarea       |
| GET    | `/tasks`     | Obtener todas las tareas    |
| GET    | `/tasks/:id` | Obtener una tarea por ID    |
| PUT    | `/tasks/:id` | Actualizar una tarea por ID |
| DELETE | `/tasks/:id` | Eliminar una tarea por ID   |

---

##  Cómo instalar y ejecutar el proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Franconc182/todolistwithai.git
```

### 2️⃣ Instalar dependencias

```bash
npm install
npm i nodemon
```

### 3️⃣ Ejecutar el servidor

```bash
npm start
```

### 4️⃣ Servidor en ejecución

El servidor se inicia en:

```
http://localhost:3000
```

---

##  Herramientas y Tecnologías Utilizadas

- **Node.js** – Entorno de ejecución JavaScript
- **Express.js** – Framework backend minimalista
- **Nodemon** – Recarga automática en desarrollo

---

### Herramienta de IA utilizada

- **Herramienta:** Github Copilot

### Modelo de IA utilizado

- **Modelo:** GPT-5 mini

### Ejemplo de prompts utilizadas

- "Busca bugs en mi codigo"
  Define una tarea clara(Bug-Hunting)
  Es directo y con una única intención: encontrar errores.
- "Optimiza y explica que cambio"
  Esta tiene dos tareas pero son claras, pero al no tener un rol especifico la IA empezo a alucinar y hacer cambios exagerados.
- "Calidad del código y cumplimiento de las mejores prácticas"
  Esta prompt es efectiva ya que trata clean code y principios SOLID eentre otros mas, su contra al ser un poco generica puede variar por lenguaje.

  ### En qué parte del proceso fue más útil la IA?

  -La IA fue más útil en la etapa de revisión, mejora del código, evaluar la calidad general y el cumplimiento de buenas prácticas.

  ### Conclusion personal

  - Trabajar con la IA como asistente me permitió entender que la calidad de la respuesta depende directamente de la calidad del prompt. En la práctica, aprendí que un buen prompt no es solo pedir “ayuda”, sino definir claramente la tarea, el contexto, el rol que quiero que tome la IA y el formato en el que necesito la respuesta.
