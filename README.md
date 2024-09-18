# Integrate-ChatBOT-with-CLAUDE.AI-on-your-website (Step by step)


# 1. Instalați Node.js:

Descărcați și instalați Node.js de la https://nodejs.org/

Verificați instalarea rulând în CMD comenzile:

node --version 

si

npm --version 


# 2. Creați un director pentru proiect. 
Puteti crea in mod simplu acest folder in care sa adaugati fisierele, sau puteti sa creati cu cmd, astfel:

mkdir chatbot-claudeai

cd chatbot-claudeai

# 3. Inițializați proiectul Node.js cu ajutorul CMD din acel folder:
npm init -y

# 4. Instalați dependențele necesare in CMD din acel folder:
npm install express cors 

node-fetch@2 dotenv

# 5. Adaugati in folder fișierele necesare:

server.js

index.html

.env

.gitignore

chatbot-style.css

package.json


# 5. Adăugați conținutul corespunzător în fiecare fișier (așa cum ați furnizat în atașamente).
Change API-KEY in fisierele urmatoare:

.env 

server.js 



# 6. Rulați serverul in CMD din acel folder prin comanda:
node server.js

# 7. Accesați chatbot-ul:

Deschideți un browser web

Navigați la http://localhost:3000

Testați funcționalitatea chatbot-ului din pagina index.html (se deschide automat pagina cand accesati http://localhost:3000/ 

Introduceți un mesaj în caseta de chat

Apăsați butonul "Trimite" sau apăsați Enter

Verificați răspunsul primit de la Claude AI
