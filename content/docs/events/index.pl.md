---
title: "Zdarzenia"
icon: "💥"
description: "Przekonaj się w jaki sposób zdarzenia pozwalają tworzyć elastyczne przejścia i automatyzacje."
weight: 39
---
## Czym są zdarzenia?

**Zdarzenie** (ang. *Event*) to moment, w którym zachodzi jakaś reakcja.

Reakcje na zdarzenie ustawia się za pomocą **węzłów** dostępnych w danym zdarzeniu, tworząc połączenia pomiędzy węzłami innych elementów.

Każde zdarzenie posiada:
- od zera do kilku **węzłów wejściowych** (z lewej strony), które zmieniają działanie zdarzenia.
- co najmniej jeden **węzeł wyjściowy** (z prawej strony), który uruchamia połączone z nim zdarzenia w momencie aktywacji poszczególnych zdarzeń.

Dostępne zdarzenia:
- **Event** - zwykłe zdarzenie aktywowane ręcznie.
- **Timer Event** - zdarzenie aktywowane czasowo.
- **Stop All Tracks Event** - zdarzenie zatrzymujące wszystkie grające utwory.

## Event (zwykłe zdarzenie)

{{< figure src="event_triggerable.jpg" caption="Rys. 1 – zwykłe zdarzenie." class="docs-img" >}}

- Zdarzenie to aktywuje się **ręcznie**. 
- Można je aktywować z poziomu edytora lub listy odwtarzania, używając przycisku "trigger".
- Trzeba je połączyć z innymi elementami.
- Dobrą praktyką jest nadanie mu znaczącej nazwy, określającej co dane zdarzenie ma robić.

## Timer Event (zdarzenie czasowe)

{{< figure src="event_timer.jpg" caption="Rys. 2 – zdarzenie czasowe." class="docs-img" >}}

- Zdarzenie uruchamia się **cyklicznie** co jakiś czas.
- **Min** - określa minimalną ilość sekund, którą trzeba odczekać.
- **Max** - określa maksymalną ilość sekund, którą trzeba odczekać.
- **Enabled** - jeśli jest zaznaczone, to zdarzenie jest włączone i czeka na swoje cykliczne uruchomienie.
- **Trigger Once** - jeśli jest zaznaczone, to zdarzenie uruchami się tylko raz, po czym się wyłączy.
- **Enable (węzeł wejściowy)** - włącza on zdarzenie, które będzie teraz uruchamiać się cyklicznie.
- **Disable (węzeł wejściowy)** - wyłącza zdarzenie, nie będzie ono uruchamiane cyklicznie.

Czas aktywacji jest losowany pomiędzy wartościami Min i Max. Jeśli chcemy, aby zdarzenie zawsze uruchamiało się w takim samym odstępie czasu, należy ustawić te pola na tą samą wartość.

**UWAGA:** zdarzenie zawsze zaczyna jako wyłączone, nawet po wczytaniu kompozycji. Dlatego za każdym razem trzeba włączać je ręcznie, poprzez np. włączenie go za pomocą węzła Enable. Jest to celowe działanie, mające na celu zapobiegnięcie sytuacji, kiedy po wczytaniu kompozycji zdarzenie czasowe niespodziewanie się aktywuje.

{{< figure src="timer_activate.jpg" caption="Rys. 3 – Włączenie zdarzenia czasowego." class="docs-img" >}}

## Stop All Tracks Event (zdarzenie zatrzymujące wszystkie utwory)

{{< figure src="event_stopall.jpg" caption="Rys. 4 – Zdarzenie zatrzymujące wszystkie utwory." class="docs-img" >}}

- Zdarzenie to aktywuje się **ręcznie** lub za pomocą węzła wejściowego.
- **Stop All (węzeł wejściowy)** - zatrzymuje wszystkie grające w danym momencie utwory.
- **On Stop All (węzeł wyjściowy)** - uruchamiany jest w momencie aktywowania zdarzenia "Stop All".

Zdarzenie to można wykorzystać do wyłączenia wszystkich grających utworów, bez potrzeby tworzenia do nich bezpośrednich połączeń.

## Łączenie z innymi elementami
Zdarzenia można łączyć z innymi zdarzeniami np. [zdarzeniami utworów](docs/playback-events)) za pomocą węzłów.

Co do zasady - **jeśli węzły innych elementów mają ten sam kolor (np. różowy), to można je ze sobą połączyć.**

Dzięki temu można tworzyć przeróżne kombinacje!

{{< figure src="trigger_example.jpg" caption="Rys. 5 – Połączenie pomiędzy węzłem zdarzenia a węzłem utworu." class="docs-img" >}}

## Przykłady

Wiele przykładów użycia zdarzeń i sterowników opisujemy na naszym **[blogu](blog/)**. 

Zajrzyj tam, by zobaczyć, jak można je kreatywnie wykorzystać w praktyce i jak ułatwiają tworzenie płynnych, dynamicznych scen dźwiękowych.

# Masz pytania?

{{< docs-contact >}}
