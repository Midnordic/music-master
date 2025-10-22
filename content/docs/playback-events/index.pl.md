---
title: "Zdarzenia utworów"
icon: "⚡"
description: "Dowiedz się, czym są zdarzenia utworów i jak dzięki nim tworzyć własne automatyzacje."
weight: 38
---
## Czym są zdarzenia utworów?

**Zdarzenie utworu** (ang. *Playback Event*) to zmiana stanu utworu na inny, np. z odgrywanego na zakończony. 

Można zaprogramować reakcję na dowolne zdarzenie — na przykład rozpoczęcie, zapauzowanie czy zakończenie utworu.

Każde zdarzenie utworu posiada **węzeł wejściowy i wyjściowy**, które możesz połączyć z innymi elementami w edytorze.

Dostępne zdarzenia utworów:
- **Play / On Play** — uruchomienie odtwarzania  
- **Pause / On Pause** — pauza
- **Resume / On Resume** — wznowienie  
- **Stop / On Stop** — zatrzymanie odtwarzania  
- **Loop / On Loop** — zapętlenie (moment przejścia z końca na początek)  
- **Finish / On Finish** — zakończenie utworu  

{{< figure src="events.jpg" caption="Rys. 1 – Zdarzenia przypisane do utworu." class="docs-img" >}}

## Jak działają zdarzenia utworu?

Za każdym razem, gdy nastąpi zdarzenie utworu (np. utwór zacznie grać, zapauzuje się, skończy), **uruchamiany jest odpowiadający mu węzeł wyjściowy (po prawej stronie)**.  

W edytorze możesz tworzyć **połączenia między zdarzeniami i ich węzłami**, aby sterować zachowaniem innych elementów.
- Połączenie do węzła wejściowego (lewa strona) – uruchamia dane zdarzenie i węzeł wyjściowy.
- Połączenie do węzła wyjściowego (prawa strona) - węzeł wyjściowy uruchamia inne, podpięte do niego węzły.

W ten sposób możesz projektować złożone reakcje – na przykład, by zakończenie jednego utworu automatycznie uruchamiało inny.

## Przykład 1: zdarzenie utworu *Play / On Play*

{{< figure src="play_example.jpg" caption="Rys. 2 – przykład użycia zdarzenia Play." class="docs-img" >}}

W tym przykładzie połączyliśmy zdarzenia **Play** dwóch utworów.  

Gdy pierwszy utwór (*Dark Bar*) zaczyna grać, aktywuje się zdarzenie **Play** i węzeł wyjściowy tego zdarzenia **On Play**.
Ten z kolei jest połączony ze zdarzeniem **Play** drugiego utworu, co powoduje jego automatyczne uruchomienie.

**Efekt:** odtworzenie pierwszego utworu automatycznie startuje drugi.

## Przykład 2: zdarzenie utworu *Finish / On Finish*

{{< figure src="finish_example.jpg" caption="Rys. 3 – Przykład użycia zdarzenia Finish." class="docs-img" >}}

Tutaj połączyliśmy zdarzenie **Finish** pierwszego utworu (a konkretnie jego węzeł wyjściowy) ze zdarzeniem **Play** drugiego.  

**Efekt:** gdy pierwszy utwór się zakończy, drugi automatycznie rozpocznie odtwarzanie. Dzięki temu możesz tworzyć płynne przejścia między scenami lub segmentami muzyki.

## Łączenie z innymi elementami

Zdarzenia utworów można łączyć z węzłami i zdarzeniami innych elementów.

Co do zasady - **jeśli węzły innych elementów mają ten sam kolor (np. różowy), to można je ze sobą połączyć.**

Dzięki temu można tworzyć przeróżne kombinacje!

{{< figure src="trigger_example.jpg" caption="Rys. 4 – Połączenie pomiędzy węzłem zdarzenia a węzłem wejściowym utworu." class="docs-img" >}}

# Masz pytania?

{{< docs-contact >}}
