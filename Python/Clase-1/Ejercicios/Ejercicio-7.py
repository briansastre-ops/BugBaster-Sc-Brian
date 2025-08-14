# Dada la siguiente tupla
tupla = (13, 1, 8, 3, 2, 5, 8)  # Definimos la tupla

lista = []#definimos una lista vacia
#Filtrar los elementos de la tupla que sean menores a 5
for elemento in tupla:
    if elemento < 5:
        lista.append(elemento)
print(lista)



