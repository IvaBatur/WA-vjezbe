## Kako pokrenuti projekt nakon kloniranja

### Korak 1: Kloniranje repozitorija

Prvo trebaš klonirati projekt na svoje računalo:
```bash
git clone https://github.com/tvoje-korisnicko-ime/pizza-app.git
cd pizza-app
```

### Korak 2: Pokretanje backend servera

Backend server služi za dohvaćanje podataka o pizzama i za primanje narudžbi.
```bash
# Uđi u backend folder
cd pizza-express

# Instaliraj potrebne pakete
npm install

# Pokreni server
node index.js
```

Trebao bi vidjeti poruku: `Pizza poslužitelj sluša na portu 3000`

Ostavi ovaj terminal otvoren! Backend mora raditi cijelo vrijeme.

### Korak 3: Pokretanje frontend aplikacije

Otvori **novi terminal** (jer backend mora ostati pokrenut u prvom).
```bash
# Iz glavnog foldera idi u frontend folder
cd pizza-vue/vue-project

# Instaliraj potrebne pakete
npm install

# Pokreni Vue aplikaciju
npm run dev
```

Trebao bi vidjeti poruku s linkom: `http://localhost:5173`

### Korak 4: Otvaranje u pregledniku

Otvori preglednik i idi na adresu:
```
http://localhost:5173
```
