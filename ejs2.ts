interface Libro {
    mostrarDescripcion(): string;
}

class LibroTexto implements Libro {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro de texto titulado "${this.titulo}" escrito por ${this.autor}`;
    }
}

class Atlas implements Libro {
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarDescripcion() {
        return `Libro de comic titulado "${this.titulo}" dibujado por ${this.autor}`;
    }
}

class CreaLibros {
    static crearLibro(tipo: string, titulo: string, autor: string, contenido: string): Libro {
        if (tipo === 'texto') {
            return new LibroTexto(titulo, autor, contenido);
        } else if (tipo === 'atlas') {
            return new Atlas(titulo, autor, contenido);
        } else {
            throw new Error('Tipo de libro no valido');
        }
    }
}

class Libro3 {
    private libro: Libro;

    constructor(tipo: string, titulo: string, autor: string, contenido: string) {
        this.libro = CreaLibros.crearLibro(tipo, titulo, autor, contenido);
    }

    mostrarDescripcion(): string {
        return this.libro.mostrarDescripcion();
    }
}

const libroTexto = new Libro3('texto', 'Libro de TypeScript', 'Autor A', 'Contenido libro');
const libroAtlas = new Libro3('atlas', 'El Universo', 'Autor B', 'Contenido atlas');

console.log(libroTexto.mostrarDescripcion());
console.log(libroAtlas.mostrarDescripcion());