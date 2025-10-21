---
title: "Wyzwalacze utworów"
icon: "⚡"
description: "Dowiedz się, czym są wyzwalacze utworów i jak dzięki nim tworzyć własne automatyzacje."
weight: 39
---

Wyzwalacze utworów to potężne narzędzie, dzięki któremu możesz zaprojektować własne przejścia, automatyzacje i interakcje między utworami.

## Czym są wyzwalacze utworów?

**Wyzwalacze utworów** (ang. *Playback Events / Triggers*) to punkty reakcji, które są przypisane do każdego utworu.  

Umożliwiają one reakcję na zdarzenia zachodzące podczas odtwarzania — na przykład rozpoczęcie, zapauzowanie czy zakończenie utworu.

Każdy wyzwalacz posiada **nazwę** i **węzły**, który możesz połączyć z innymi elementami w edytorze.

Dostępne wyzwalacze utworów:
- **Play / On Play** — uruchomienie odtwarzania  
- **Pause / On Pause** — pauza
- **Resume / On Resume** — wznowienie  
- **Stop / On Stop** — zatrzymanie odtwarzania  
- **Loop / On Loop** — zapętlenie (moment przejścia z końca na początek)  
- **Finish / On Finish** — zakończenie utworu  

{{< figure src="events.jpg" caption="Rys. 1 – wyzwalacze przypisane do utworu." class="docs-img" >}}

## Jak działają wyzwalacze?

Za każdym razem, gdy utwór zmieni swój stan (np. zacznie grać, zapauzuje się, skończy), **aktywowany jest odpowiadający mu wyzwalacz**.  

W edytorze możesz tworzyć **połączenia między wyzwalaczami**, aby sterować zachowaniem innych utworów lub akcji:
- Połączenie do **lewej strony** wyzwalacza – pozwala uruchomić go ręcznie.  
- Połączenie z **prawej strony** wyzwalacza – pozwala, by jego aktywacja uruchomiła kolejny wyzwalacz.

W ten sposób możesz projektować złożone reakcje – na przykład, by zakończenie jednego utworu automatycznie uruchamiało inny.

## Przykład 1: wyzwalacz *Play / On Play*

{{< figure src="play_example.jpg" caption="Rys. 2 – przykład użycia wyzwalacza Play." class="docs-img" >}}

W tym przykładzie połączyliśmy wyzwalacze **Play** dwóch utworów.  

Gdy pierwszy utwór (*Dark Bar*) zaczyna grać, aktywuje się jego wyzwalacz **On Play**.  
Ten z kolei jest połączony z wyzwalaczem **Play** drugiego utworu, co powoduje jego automatyczne uruchomienie.

**Efekt:** odtworzenie pierwszego utworu automatycznie startuje drugi.

## Przykład 2: wyzwalacz *Finish / On Finish*

{{< figure src="finish_example.jpg" caption="Rys. 3 – przykład użycia wyzwalacza Finish." class="docs-img" >}}

Tutaj połączyliśmy wyzwalacz **Finish** pierwszego utworu z wyzwalaczem **Play** drugiego.  

**Efekt:** gdy pierwszy utwór zakończy się, drugi automatycznie rozpocznie odtwarzanie.  
Dzięki temu możesz tworzyć płynne przejścia między scenami lub segmentami muzyki.

## Łączenie z innymi elementami

Wyzwalacze utworów można łączyć z innymi wyzwalaczami (np. wyzwalaczami zdarzeń). 

Co do zasady - **jeśli węzły innych elementów mają ten sam kolor (np. różowy), to można je ze sobą połączyć.**

Dzięki temu można tworzyć przeróżne kombinacje!

{{< figure src="trigger_example.jpg" caption="Rys. 4 – połączenie pomiędzy wyzwalaczem zdarzenia a wyzwalaczem utworu." class="docs-img" >}}

# Masz pytania?

{{< docs-contact >}}
