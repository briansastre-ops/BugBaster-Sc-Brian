Nombre = ["Juan", "Pedro", "Maria", "Jose", "Ana"]

#Tambien se puede acceder a un rango de elementos,
#  con el siguiente codigo:
print(Nombre[0:2])#Solo muestra el indice 0 y 1 pero no el 2.
#ir del inicio de lal lista  al indice sin incluirlo.
print(Nombre[ :2])#Muestra desde el inicio de la lista hasta el indice 2 sin incluirlo.

#desde el indice 1 hasta el final de la lista.
print(Nombre[1: ])#Muestra desde el indice 2 hasta el final de la lista.


# modificar un elemento de la lista
Nombre [0] = "Juanito"
Nombre [2] = "Mariana"
print(Nombre)


#vamos a iterar la lista

for Nombre in Nombre:
    print(Nombre)
else:
    print("No hay mas nombres")
#vamos a preguntar cuantos elementos tiene la lista
print(len(Nombre))

#agregar un elemento a la lista
Nombre.append("Rodrigo")
#en que lugar queda ingresando el elemento?-> al final de la lista-> a esto se le llama cola.

#insertar un elemento en un indice especifico, necesita un indice(entero) y un valor.
Nombre.insert(2,"Jorge")
print(Nombre)

Nombre.insert(3,"Luciana")
print(Nombre)

#Vamos a eliminar un elemento de la lista

Nombre.remove("Jorge")
print(Nombre)

#Eliminar el ultimo elemento de la lista
Nombre.pop()
print(Nombre)

#Eliminar un indice especifico
del Nombre[2]
print(Nombre)

#eliminar ,borrar o limpiar la lista
Nombre.clear()
print(Nombre)