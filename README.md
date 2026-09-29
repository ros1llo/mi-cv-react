# CV Profesional en React — Álvaro Rosillo Olmedo

Currículum web interactivo desarrollado con **React** y **Vite** como ejercicio del ciclo de Desarrollo de Aplicaciones Web (DAW).


---

## Tecnologías

- **React** (componentes funcionales, props y hooks `useState` / `useEffect`)
- **Vite** como entorno de desarrollo
- **CSS** con variables, Flexbox, Grid y media queries
- **JSON** como fuente de datos del CV

## Funcionalidades

**Requisitos obligatorios**

- CV dividido en componentes reutilizables.
- Datos pasados a los componentes mediante **props**.
- Listas generadas con **`.map()`** a partir de arrays (experiencia, formación, habilidades, idiomas y proyectos), sin repetir JSX.
- Componente reutilizable **`Skill`** con barra de progreso según el nivel.
- Botón para **mostrar / ocultar proyectos** con `useState` y renderizado condicional.
- **Modo oscuro / claro** con `useState` y variables CSS.
- Diseño **responsive**: dos columnas en escritorio y una en móvil.

**Retos**

- ✅ **Reto 1 — Menú de navegación** fijo, con enlaces a cada sección.
- ✅ **Reto 2 — Descarga en PDF** con `window.print()` y estilos específicos de impresión (`@media print`): fondo blanco, sin menú ni formulario, y los proyectos visibles automáticamente.
- ✅ **Reto 3 — Formulario de contacto** con inputs controlados y un único estado para todos los campos.
- ✅ **Reto 4 — Validación** de campos obligatorios, formato de email y longitud mínima del mensaje, con mensajes de error y contador de caracteres.
- ✅ **Reto 5 — Datos externos**: todo el contenido del CV está en `src/data/cv.json`. Los componentes solo se encargan de mostrarlo.

## Estructura del proyecto

```
src/
├── App.jsx              # Componente principal: datos, estado del tema y estructura
├── App.css              # Estilos de la aplicación, tema oscuro y estilos de impresión
├── index.css            # Fuentes y estilos base
├── data/
│   └── cv.json          # Todos los datos del CV
└── components/
    ├── Navbar.jsx       # Menú de navegación + botón de tema
    ├── ThemeToggle.jsx  # Botón claro / oscuro
    ├── Header.jsx       # Foto, nombre, contacto y botón de PDF
    ├── About.jsx        # Sobre mí
    ├── Experience.jsx   # Experiencia profesional
    ├── Education.jsx    # Formación académica
    ├── Skills.jsx       # Lista de habilidades
    ├── Skill.jsx        # Habilidad individual con barra de progreso
    ├── Languages.jsx    # Idiomas
    ├── Projects.jsx     # Proyectos con botón mostrar / ocultar
    ├── Contact.jsx      # Formulario de contacto con validación
    └── Footer.jsx       # Pie de página
```

## Cómo ejecutarlo

Requisitos: [Node.js](https://nodejs.org/) (versión LTS).

```bash
git clone https://github.com/ros1llo/mi-cv-react.git
cd mi-cv-react
npm install
npm run dev
```

Abre la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

Para editar el contenido del CV, basta con modificar `src/data/cv.json`.

## Autor

**Álvaro Rosillo Olmedo** — Desarrollador web · Valencia

- GitHub: [@ros1llo](https://github.com/ros1llo)
- Email: a.rosolmedo@gmail.com