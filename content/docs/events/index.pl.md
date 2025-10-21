---
title: "Zdarzenia"
icon: "💥"
description: "Przekonaj się w jaki sposób zdarzenia pozwalają tworzyć elastyczne przejścia i automatyzacje."
weight: 38
---
## Czym są zdarzenia?

**Zdarzenia** (ang. *Events / Triggers*) to punkty reakcji, które tworzysz samodzielnie i łączysz z innymi elementami.

Aktuwuję one połączone z nimi wyzwalacze w odpowiednim momencie. Mogą być również aktywowane ręcznie w dowolnej chwili.

Każde zdarzenie posiada:
- co najmniej jeden **wyzwalacz wyjściowy** (z prawej strony), który aktywuje połączone z nim wyzwalacze w momencie aktywacji zdarzenia.
- od zera do kilku **wyzwalaczy wejściowych** (z lewej strony), które wpływają na zdarzenie.

Dostępne zdarzenia:
- **Event** - zwykłe zdarzenie aktywowane ręcznie.
- **Timer Event** - zdarzenie aktywowane czasowo.
- **Stop All Tracks Event** - zdarzenie zatrzymujące wszystkie grające utwory.

## Event (zwykłe zdarzenie)

{{< figure src="event_triggerable.jpg" caption="Rys. 1 – zwykłe zdarzenie." class="docs-img" >}}

- Zdarzenie to aktywuje się **ręcznie**. 
- Można je aktywować z poziomu edytora lub listy odwtarzania, używając przycisku "trigger".
- Trzeba je połączyć z innymi elementami.
- Dobrą praktyką jest nadanie mu znaczącej nazwy, określającej co dane wydarzenie ma robić.

## Timer Event (zdarzenie czasowe)

{{< figure src="event_timer.jpg" caption="Rys. 2 – zdarzenie czasowe." class="docs-img" >}}

- Zdarzenie aktywuje się **cyklicznie** co jakiś czas.
- **Min** - określa minimalną ilość sekund, którą trzeba odczekać.
- **Max** - określa maksymalną ilość sekund, którą trzeba odczekać.
- **Enabled** - jeśli jest zaznaczone, to zdarzenie jest włączone i czeka na swoją cykliczną aktywacje.
- **Trigger Once** - jeśli jest zaznaczone, to zdarzenie aktywuje się tylko raz, po czym się wyłączy.
- **Enable (wyzwalacz)** - włącza zdarzenie i zaczyna ono oczekiwać na aktywacje.
- **Disable (wyzwalacz)** - wyłącza zdarzenie i nie oczekuje ono na aktywacje.

Czas aktywacji jest losowany pomiędzy wartościami Min i Max. Jeśli chcemy, aby zdarzenie zawsze aktywowało się w takim samym odstępie czasu, należy ustawić te pola na tą samą wartość.

**UWAGA:** zdarzenie zawsze zaczyna jako wyłączone, nawet po wczytaniu kompozycji. Dlatego za każdym razem trzeba włączać je ręcznie, poprzez np. włączenie go za pomocą wyzwalacza Enabled. Jest to celowe działanie, mające na celu zapobiegnięcie sytuacji, kiedy po wczytaniu kompozycji zdarzenie czasowe niespodziewanie się aktywuje.

{{< figure src="timer_activate.jpg" caption="Rys. 3 – włączenie zdarzenia czasowego." class="docs-img" >}}

## Stop All Tracks Event (zdarzenie zatrzymujące wszystkie utwory)

{{< figure src="event_stopall.jpg" caption="Rys. 4 – zdarzenie zatrzymujące wszystkie utwory." class="docs-img" >}}

- Zdarzenie to aktywuje się **ręcznie.**
- **Stop All (wyzwalacz)** - zatrzymuje wszystkie grające w danym momencie utwory.
- **On Stop All (wyzwalacz)** - aktywowany jest w momencie aktywowania zdarzenia.

Zdarzenie to można wykorzystać do wyłączenia wszystkich grających utworów, bez potrzeby tworzenia do nich bezpośrednich połączeń.

## Łączenie z innymi elementami

Wyzwalacze zdarzeń można łączyć z innymi wyzwalaczami (np. wyzwalaczami utworów). 

Co do zasady - **jeśli węzły innych elementów mają ten sam kolor (np. różowy), to można je ze sobą połączyć.**

Dzięki temu można tworzyć przeróżne kombinacje!

{{< figure src="trigger_example.jpg" caption="Rys. 5 – połączenie pomiędzy wyzwalaczem zdarzenia a wyzwalaczem utworu." class="docs-img" >}}

## Przykłady

Wiele przykładów użycia zdarzeń i sterowników opisujemy na naszym **[blogu](blog/)**. 

Zajrzyj tam, by zobaczyć, jak można je kreatywnie wykorzystać w praktyce i jak ułatwiają tworzenie płynnych, dynamicznych scen dźwiękowych.

# Masz pytania?

{{< docs-contact >}}
