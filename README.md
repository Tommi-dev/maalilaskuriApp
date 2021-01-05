# MaalilaskuriApp
Harjoitustyönä on luoda kuvitteelliselle toimeksiantajalle web-sovellus, joka on toteutettu SPA-arkkitehtuurilla (Single page application). Sovelluksen tarkoituksena on osoittaa toimeksiantajalle, että kyseinen sovellus on mahdollista toteuttaa seuraavien vaatimusten mukaisesti.

Toimeksiantaja on taloyhtiö, joka haluaa sovelluksen, jolla se pystyy laskemaan taloyhtiön asuntojen sisätilojen maalaamisen vaatiman maalimäärän ja siitä aiheutuvat kustannukset. Taloyhtiö haluisi saada myös selville, kuinka paljon kunkin asunnon osuus olisi maalimäärästä ja kustannuksista.

Sovelluksen tulisi kysyä käyttäjältä maalin perustiedot ja tulostaa sen jälkeen web-sivulle koko taloyhtiölle ja kullekin asunnolle maalintarpeen litroina ja tämän litramäärän hinnan euroina kahden desimaalin tarkkuudella. Jokaiselle asunnolle on myös laskettava maalattavien pintojen kokonaispinta-ala, joka tulostetaan käyttäjälle.

### Maalin perustiedot
- Maalin hinta €/l
- Maalin riittoisuus m2/l
- Maalauskertojen määrä

### Taloyhtiö koostuu seuraavista asunnoista
A1  
Makuuhuone, jossa maalattava pinta-ala 45m2.  
Olohuone, jossa maalattava pinta-ala 55m2.  
  
A2  
Makuuhuone, jossa maalattava pinta-ala 35m2.  
Makuuhuone, jossa maalattava pinta-ala 45m2.  
Olohuone, jossa maalattava pinta-ala 55m2.  
  
B1  
Makuuhuone, jossa maalattava pinta-ala 35m2.  
Olohuone, jossa maalattava pinta-ala 50m2.  
  
B2  
Makuuhuone, jossa maalattava pinta-ala 30m2.  
Makuuhuone, jossa maalattava pinta-ala 40m2.  
Olohuone, jossa maalattava pinta-ala 65m2.  
  

## Sovelluksen käynnistäminen
  
Asenna riippuvuudet komennolla
```
npm install
```
  

Käynnistä JSON serveri komennolla
```
npm run server
```
Serveri käynnistyy porttiin 3001  
  

Käynnistä sovellus paikallisesti komennolla
```
npm start
```
Sovellus käynnistyy http://localhost:3000