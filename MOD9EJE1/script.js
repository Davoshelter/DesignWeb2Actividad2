:root {
    --bg-body: #1e2126;      /* Fondo oscuro general */
    --bg-card: #2b303b;      /* Fondo de la tarjeta */
    --accent: #00ead3;       /* Cian brillante (estilo OnlyThree) */
    --accent-hover: #00c7b3;
    --text-white: #ffffff;
    --text-gray: #aab2bd;
    --font-main: 'Roboto', sans-serif;
    --font-title: 'Orbitron', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg-body);
    color: var(--text-white);
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem;
}

.container {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
}

.card {
    background: var(--bg-card);
    border-radius: 4px;
    padding: 2.5rem;
    /* Borde sutil cian arriba como en tu imagen */
    border-top: 4px solid var(--accent); 
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

h1 {
    font-family: var(--font-title);
    color: var(--accent);
    margin-bottom: 0.5rem;
    text-align: center;
    letter-spacing: 2px;
}

.highlight {
    color: var(--text-white);
}

.subtitle {
    text-align: center;
    color: var(--text-gray);
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.input-section {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

#itemInput {
    flex: 1;
    padding: 1rem;
    background: #1e2126; /* Fondo oscuro para el input */
    border: 1px solid #444;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

#itemInput:focus {
    outline: none;
    border-color: var(--accent);
}

.btn {
    padding: 1rem 1.5rem;
    border: 1px solid var(--accent); /* Borde estilo "Ver Proyecto" */
    background: transparent;
    color: var(--accent);
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-family: var(--font-title);
    text-transform: uppercase;
}

.btn-add:hover {
    background: var(--accent);
    color: var(--bg-body);
    box-shadow: 0 0 15px rgba(0, 234, 211, 0.4);
}

.stats {
    text-align: center;
    padding: 1rem;
    background: #1e2126; /* Fondo oscuro para stats */
    border-radius: 4px;
    margin-bottom: 1.5rem;
    color: var(--text-gray);
    border: 1px solid #333;
}

.stats strong {
    color: var(--accent);
    font-size: 1.2rem;
}

.item-list {
    list-style: none;
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 1.5rem;
}

.item-list:empty::after {
    content: 'NO HAY ITEMS AÚN. ¡AÑADE UNO!';
    display: block;
    text-align: center;
    color: #555;
    padding: 2rem;
    font-family: var(--font-title);
    font-size: 0.8rem;
}

/* Estilo de los items de la lista */
.list-item {
    background: #343a40; /* Un gris un poco más claro que el fondo */
    padding: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s;
    border-left: 3px solid transparent;
}

.list-item:hover {
    transform: translateX(5px);
    background: #3e444a;
    border-left-color: var(--accent);
}

.item-text {
    flex: 1;
    color: var(--text-white);
}

.item-buttons {
    display: flex;
    gap: 0.5rem;
}

/* Botones pequeños (Editar/Borrar) - RESTAURADOS */
.btn-icon {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

/* Editar: Fondo oscuro con borde amarillo/naranja para destacar */
.btn-edit {
    background: #444;
    color: #ffc107;
    border: 1px solid #ffc107;
}

.btn-edit:hover {
    background: #ffc107;
    color: #000;
}

/* Guardar: Fondo oscuro con borde verde */
.btn-save {
    background: #444;
    color: #28a745;
    border: 1px solid #28a745;
}

.btn-save:hover {
    background: #28a745;
    color: white;
}

/* Eliminar: Fondo oscuro con borde rojo */
.btn-delete {
    background: #444;
    color: #dc3545;
    border: 1px solid #dc3545;
}

.btn-delete:hover {
    background: #dc3545;
    color: white;
}

.actions {
    text-align: center;
}

.btn-danger {
    background: transparent;
    color: #ff6b6b;
    border-color: #ff6b6b;
    width: 100%;
}

.btn-danger:hover {
    background: #ff6b6b;
    color: white;
}

/* Modo edición */
.list-item.editing .item-text {
    display: none;
}

.list-item .edit-input {
    display: none;
    flex: 1;
}

.list-item.editing .edit-input {
    display: block;
    padding: 0.5rem;
    background: #1e2126;
    border: 1px solid var(--accent);
    color: white;
    border-radius: 4px;
    font-size: 1rem;
}

.list-item .btn-save {
    display: none;
}

.list-item.editing .btn-save {
    display: flex; /* Flex para mantenerlo centrado */
}

.list-item.editing .btn-edit {
    display: none;
}

@media (max-width: 600px) {
    .card {
        padding: 1.5rem;
    }
    
    .input-section {
        flex-direction: column;
    }
}