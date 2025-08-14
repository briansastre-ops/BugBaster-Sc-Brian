#Tuplas  son inmutables, no se pueden modificar, se pueden agregar, eliminar, etc.

#Definir una tupla

cocina = ("cuchara  ", "cuchillo", "tenedor")
print(cocina)
print(len(cocina))
#Acceder a un elemento de la tupla
print(cocina[0])
#Acceder a un rango de elementos de la tupla
print(cocina[0:2])
#Mostrar de manera inversa
print(cocina[-1])

####
Verduras = ("tomate",)#Una tupla necesita una sea de un elemento, por eso se agrega la coma.
print(Verduras)

for cocinar in cocina:
    print(cocinar, end=",")#Print esta usando\n para saltos de linea.
    #end="," es para que no se imprima en una nueva linea.


cocinaLista = list(cocina)
cocinaLista[0] = "plato"
cocina = tuple(cocinaLista)
print('\n',cocina)

del cocina
print(cocina)






