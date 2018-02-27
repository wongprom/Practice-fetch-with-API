# Practice-fetch-with-API

Övning - todos
1.Hämta alla todos och visa upp de i en snygg lista i HTML. Du behöver göra en GET-request med fetch(). Se över koden från genomgången för att få hjälp. Du ska alltså lägga manipulera och lägga till DOM-element efter att du har fått tillbaka svaret från databasen, d.v.s inuti then(). Kom ihåg att värdet som kommer tillbaka är JSON och måste göras om till JavaScript

2.Gör så att när du trycker på enter eller när du trycker på en knapp på sidan så skickas en POST-request till APIet med det du skrev i input-fältet. Här måste du alltså ha en eventListener bunden till input-fältet som i i den examinerande uppgiften men istället för att lägga till element direkt i DOMen ska värdet skickas med fetch() till databasen.

3.Gör så att listan med todos uppdateras, d.v.s DOMen uppdaters när du skapar en ny todo enligt punkt 2. Du måste alltså både skicka en fetch()-request samt skapa elementet i DOMen på valfritt sätt.
Gör så att du kan toggla complete-värdet genom en fetch()-request. Om du ska manipulera enbart ett värde ska du använda metoden PATCH samt enbart skicka med det värde som ska ändras i body.