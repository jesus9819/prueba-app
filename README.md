
# 📦 Prueba Técnica - Angular + JSONPlaceholder

Este proyecto fue desarrollado como solución a la prueba técnica que consiste en consumir la API pública de JSONPlaceholder y realizar operaciones CRUD completas usando Angular.

---

## 🚀 Tecnologías utilizadas

- Angular 16+
- Angular Material
- TypeScript (tipado estricto)
- SweetAlert2
- RxJS
- Lazy Loading
- Reactive Forms

---

## ✅ Funcionalidades implementadas

| Funcionalidad              | Estado |
|---------------------------|--------|
| Listado de publicaciones  | ✅ Tabla y tarjetas, máx. 10 |
| Ver detalle de publicación| ✅ Página `/posts/view/:id` |
| Crear nueva publicación   | ✅ Formulario con validaciones |
| Editar publicación        | ✅ Soporte completo con formulario |
| Eliminar publicación      | ✅ Con confirmación SweetAlert2 |
| Validaciones              | ✅ Campos requeridos y mínimos |
| Formulario Reactivo       | ✅ Usando FormBuilder |
| Tipado estricto           | ✅ Interfaz `Post` aplicada |
| Navegación con estado     | ✅ Reflejo inmediato de cambios |
| UX mejorada               | ✅ Estilos Angular Material + SweetAlert2 |

---

## 🧪 Cómo probar

1. Clona el repositorio:

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
ng serve
```

4. Accede a:

```
http://localhost:4200/posts
```

---

## 🧠 Notas técnicas

- La API JSONPlaceholder **no guarda cambios realmente**, por lo que las publicaciones creadas/editadas se reflejan visualmente en el array local.
- Se utiliza `router.navigate(['/posts'], { state: { newPost } })` para simular persistencia.
- SweetAlert2 maneja todas las alertas y confirmaciones.
- La arquitectura sigue principios de separación de responsabilidades por módulo y componentes.

---

## 📂 Estructura principal

```
src/
├── app/
│   ├── posts/
│   │   ├── components/
│   │   │   ├── post-list/
│   │   │   ├── post-form/
│   │   │   └── post-detail/
│   │   ├── services/
│   │   └── models/
│   └── shared/
│       └── services/alert.service.ts
```

---

## 👨‍💻 Autor

- Jesús Zapata  
- GitHub: [@jesus9819](https://github.com/jesus9819)

---

## 📄 Licencia

Este proyecto es de uso técnico para procesos de selección. No está asociado oficialmente a JSONPlaceholder.
