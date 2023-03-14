## Aplicatie MVC cu referinta in model
In plus fata de proiectul anterior, in modelul firma am creat un field angajati ce accepta referinte de tip 'angajat'

Astfel in firma putem avea mai multi angajati cu propriile lor operatii

Pentru a avea acces direct la angajati e necesar sa folosim functia `populate()` 

ex: `await firma.findById(req.params.id).populate("angajati")`

Deasemena am creat un middleware pentru a valida datele pe post si put
## Proiect urmator: 
https://github.com/Andrei1128/MEANapp-backend
## Proiect anterior: 
https://github.com/Andrei1128/express-MVC-SimpleCRUD
