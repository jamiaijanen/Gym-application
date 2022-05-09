# Mobiiliohjelmointi kurssin lopputyö

### Ohjelman käyttö

Ohjelmaa pystyy käyttämään lokaalisti kloonaamalla tämän repositorion omalle koneelle ja ajamalla nämä komennot kloonatun kansion sisällä:

```
npm install
expo start
```

Tämän jälkeen mene selaimella osoitteeseen: http://localhost:19002/ .


Tämä ohjelma on myös julkaistu expo.dev palvelussa ja linkki siihen on: https://expo.dev/@jami.aijanen/mobiiliLopputyo .


### Käytetyt teknologiat

Ohjelma käyttää tietokantana expo-sqlite:ä, jonne tallennetaan harjoituksia. Ohjelman navigaatio on toteutettu Reactin navigaatio kirjastoa käyttämällä ja tässä ohjelmassa käytössä on bottom-tabs navigaatio. Myös käytössä on expo-notifications ja expo-device, mitkä on asennettu ulkopuolisina komponentteina. Näiden avulla ohjelma pystyy lähettämään notifikaatioita käyttäjän puhelimeen.

Tässä kaikki asennetut komponentit:
```
expo install expo-sqlite
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/bottom-tabs
expo install expo-notifications
expo install expo-device
```
