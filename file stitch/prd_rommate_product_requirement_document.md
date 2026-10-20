# Product Requirement Document (PRD) — ROMMATE

## 1. Executive Summary & Product Vision
**ROMMATE** è una piattaforma mobile innovativa ideata per studenti e giovani lavoratori alla ricerca di coinquilini e alloggio. A differenza dei tradizionali portali di annunci immobiliari — che spingono individui isolati a contendersi singole stanze —, ROMMATE introduce il paradigma del **"Team-Up Pre-Affitto"**: gli utenti trovano prima coinquilini con cui hanno alta compatibilità caratteriale e abitudini compatibili, formano un gruppo coeso e solido (2, 3 o 4 persone) e si presentano insieme e strutturati ai proprietari immobiliari, massimizzando le probabilità di aggiudicarsi un intero appartamento.

---

## 2. Target Persona & Problem Statement

### 2.1 Target Persona
* **Lo Studente Fuorisede (19-24 anni)**: Budget limitato, timore di ritrovarsi con coinquilini incompatibili (pulizia, rumore, orari di studio), difficoltà a superare i casting dei proprietari da solo.
* **Il Giovane Lavoratore / Remote Worker (24-32 anni)**: Cerca stabilità, tranquillità e affinità su orari di sonno, gestione degli spazi comuni e smart working.
* **Il Proprietario di Casa**: Preferisce affittare l'intero immobile a un gruppo unito, solvibile e referenziato anziché gestire contratti singoli frammentati con continui turnover e liti di convivenza.

### 2.2 Problemi Risolti
1. **Liti di Convivenza Prevenibili**: Conflitti su stoviglie nel lavello, pulizie, fumo, orari e ospiti.
2. **Asimmetria Contrattuale**: Candidarsi come singolo espone a canoni gonfiati per stanze singole; candidarsi in gruppo permette di affittare interi appartamenti a prezzi pro-capite vantaggiosi.
3. **Frustrazione nei Casting**: I proprietari scartano i candidati disorganizzati; un gruppo pre-costituito riduce il rischio di insolvenza e sfitto.

---

## 3. Product Architecture: Single-Screen Experience

L'applicazione concentra l'onboarding e la conversione in un'**unica schermata compatta e ad altissima usabilità (iPhone 390×844)**, ottimizzata per abbattere l'abbandono.

### Modulo 1: Candidatura di Gruppo (Team Formation)
* **Obiettivo**: Definire la dimensione del gruppo obiettivo e invitare o aggregarsi a compagni compatibili.
* **Componenti UI**:
  * Selettore a pillola con opzioni: `2 Persone`, `3 Persone`, `4 Persone`.
  * Visualizzatore slot interattivo con avatar utente `[TU]` e slot espandibili `(+)` per membri aggiuntivi.
  * CTA Secondaria Primaria: `ATTIVA MODALITÀ GRUPPO / UNISCITI`.
* **Metriche di Successo**: % di utenti che creano o condividono un link gruppo pre-matching.

### Modulo 2: Test di Compatibilità Convivenza (Stepped Questionnaire)
* **Obiettivo**: Misurare con precisione l'indice di affinità sulle 8 tematiche critiche di convivenza.
* **Caratteristiche UX**:
  * **Presentazione One-by-One**: Una domanda visibile per volta per mantenere il layout compatto e focalizzato.
  * **Obbligatorietà di risposta**: Rimozione del bypass per garantire un profilo di compatibilità solido al 100%.
  * **Stepper e Progresso**: Barra di avanzamento segmentata a 8 tacche (`Domanda X di 8`), contatore risposte fornite (`X / 8 Risposte`).
  * **Navigazione**: Tasti `← Precedente` e `Avanti →` a pillola con feedback tattile.
* **Gli 8 Ambiti di Matching**:
  1. *D1. Piatti & Lavello*: Tolleranza oraria / a lotti vs. regola immediata zero accumulo.
  2. *D2. Fumo & Svapo*: Non fumatore assoluto vs. tolleranza balcone / consentito.
  3. *D3. Cronotipo & Orari di Sonno*: Mattiniero vs. notturno.
  4. *D4. Ospiti & Feste*: Casa aperta con preavviso vs. spazio intimo/tranquillo.
  5. *D5. Pulizia Aree Comuni*: Turni rigidi calendarizzati vs. autogestione elastica.
  6. *D6. Animali Domestici*: Pet lover vs. allergie/spazio privo di animali.
  7. *D7. Budget & Spese Condivise*: Divisione rigorosa al centesimo vs. fondo comune forfettario.
  8. *D8. Atmosfera della Casa*: Conviviale & cene insieme vs. indipendenza e privacy.

### Modulo 3: Conversione & Algoritmo di Matching
* **CTA Master Sticky/Bottom**: `CALCOLA COMPATIBILITÀ & TROVA COINQUILINI`.
* **Stato del Bottone**: Disabilitato / opaco fino al completamento delle 8 risposte; attivo con micro-animazione al raggiungimento di 8/8.
* **Output Post-Click**:
  * Calcolo score di compatibilità (0–100%).
  * Generazione della "Scheda Candidatura Gruppo" esportabile in PDF / link da inviare ai proprietari.
  * Feed dei profili con affinità > 80%.

---

## 4. Design System & Visual Identity (Warm Kinship)

| Elemento | Specifica Tecnica | Razionale di Design |
| :--- | :--- | :--- |
| **Mood** | Accogliente, rassicurante, ordinato, fresco | Trasmette calore domestico e fiducia |
| **Colore Sfondo** | `#F8F7F4` (Warm Linen) | Riduce l'affaticamento visivo, sensazione editoriale e calda |
| **Colore Primario / CTA** | `#E26D5C` (Terracotta Coral) | Vivace, energetico ma umano; guida l'occhio verso le azioni cardine |
| **Colore Alta Compatibilità**| `#2D6A4F` (Forest Green) | Denota accordo, sicurezza e assenza di conflitti |
| **Colore Tolleranza / Neutral**| `#E9B44C` (Warm Ochre) | Segnala differenze gestibili con buon senso |
| **Tipografia Primaria** | Plus Jakarta Sans / Poppins | Geometria moderna per titoli, pulsanti e pillole |
| **Tipografia Body** | Inter | Massima leggibilità per quesiti e opzioni su schermi mobile compatti |
| **Border Radius** | `rounded-full` (pillole), `rounded-3xl` (card) | Nessuno spigolo vivo per un'estetica amichevole e morbida |
| **Ombreggiatura** | `box-shadow: 0 10px 25px -5px rgba(226, 109, 92, 0.12)` | Profondità soffusa senza appesantire l'interfaccia |

---

## 5. Functional & Technical Requirements

### 5.1 Requisiti Funzionali
* **RF-01**: Salvataggio in LocalStorage / State dello stato di avanzamento per evitare la perdita dei dati in caso di refresh.
* **RF-02**: Selezione obbligatoria ad opzione singola (Radio Card) per ogni step.
* **RF-03**: Gestione del gruppo in real-time tramite deep-link univoco (`rommate.app/group/{uuid}`).
* **RF-04**: Generazione punteggio pesato basato sul modello "Kill-Switch": se due utenti collidono su fumo o animali (incompatibilità bloccante), l'affinità globale scende al di sotto del 40%.

### 5.2 Requisiti Non Funzionali
* **RNF-01 Performance**: Caricamento iniziale < 1.2s su rete mobile 4G.
* **RNF-02 Responsiveness**: Ottimizzazione rigorosa per viewport 390×844 (iPhone 12/13/14/15) e adattamento fluid su schermi da 360px a 430px.
* **RNF-03 Accessibilità**: Contrasto colori minimo AA (WCAG 2.1) su tutti i testi (testo bianco `#FFFFFF` su corallo `#E26D5C` ha contrasto > 4.5:1).

---

## 6. Roadmap & Next Steps
* **Fase 1 (MVP Attuale)**: Scheda unica onboarding + quiz compatibilità 8 quesiti + simulatore gruppo.
* **Fase 2**: Dashboard del gruppo condiviso con chat interna e bacheca alloggi da condividere.
* **Fase 3**: Passaporto inquilini con referenze verificate e garanzia di reddito/garante per i proprietari.
