# Descrizione

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 
Numero push minimi: 7

# Scomposizione del problema

Dichiaro una variabile per il bottone e lo recupero dal DOM

Dichiaro una variabile per i numeri che appariranno e recupero l'elemento dal DOM

Creo un array vuoto simonSays

Dichiaro una variabile score = 0

Creo un array vuoto per i numeri corretti

Creo un evento per il bottone

Utilizzo un ciclo WHILE per andare a inserire randomicamente 5 numeri all'interno dell'array vuoto

Li restituisco a schermo per l'utente

Dichiaro una variabile per per i secondi

Dichiaro una variabile per il tempo e vado a inserire il countdown a schermo

Il countdown di 30 secondi partirà appena il giocatore premerà il bottone

Al termine del countdown i numeri non saranno più visibili a schermo e l'utente dovrà inserire tramite prompt i numeri che ricorda

Una volta inseriti i numeri verrà restituito all'utente un responso con quanti e quali numeri avrà indovinato