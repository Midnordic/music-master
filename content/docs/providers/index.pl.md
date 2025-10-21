---
title: "Sterowniki"
description: "Prosty sposób na automatyczną zmianę parametrów utworu."
weight: 37
---
## Czym są sterowniki?

**Sterowniki** (ang. *Controllers*) to elementy, które automatycznie sterują parametrami utworów.  
Pozwalają one na zautomatyzowaną zmianę takich parametrów jak **głośność** czy **prędkość**, reagując na zdarzenia lub wyzwalacze.

Każdy sterownik posiada jedno lub więcej **wyjść**, które można łączyć z parametrami utworu.

Dostępne rodzaje sterowników:
- **Fixed Value** – ustawia zadaną wartość w określonym czasie.  
- **Randomizer** – losuje wartość z podanego zakresu.  
- **Fade In/Out** – stopniowo pogłaśnia i wycisza utwór.  
- **Crossfade** – umożliwia płynne przejścia pomiędzy zestawami utworów.

## Jak działają sterowniki?

Sterowniki automatycznie kontrolują parametry utworu (takie jak głośność czy prędkość).  

**Uwaga:**  
Jeśli sterownik jest połączony z parametrem utworu, nie można zmieniać tego parametru ręcznie — jest on wtedy kontrolowany przez sterownik. Ostatnia wartość ustawiona przez użytkownika jest oznaczona **pionową kreską** na pasku wartości danego parametru. Niektóre sterowniki (np. *Crossfade*) potrafią dostosować się do wartości ustawionej ręcznie — w takim przypadku zmiana parametru nadal przyniesie oczekiwany efekt.

{{< figure src="connected_provider.jpg" caption="Rys. 1 – Sterownik połączony z parametrem utworu." class="docs-img" >}}

## Fixed Value

{{< figure src="provider_fixed.jpg" caption="Rys. 2 – Sterownik Fixed Value." class="docs-img" >}}

Sterownik **Fixed Value** pozwala na szybkie przełączanie pomiędzy kilkoma zdefiniowanymi wartościami.  
Każdy wiersz (indeks) określa wartość i czas, po którym dana wartość ma zostać osiągnięta.

- **1, 2, 3...** – indeksy z polami: *wartość* (0.0–2.0) i *czas przejścia* (w sekundach).  
- **Using index** – numer aktualnie używanego indeksu.  
- **Use Index 1/2/3 (wyzwalacz)** – wyzwalacz, który przełącza na wybrany indeks.  

Dzięki temu możesz szybko zmieniać poziom głośności lub prędkości w zależności od sytuacji w grze.

## Randomizer

{{< figure src="provider_randomizer.jpg" caption="Rys. 3 – Sterownik Randomizer." class="docs-img" >}}

Sterownik **Randomizer** losuje wartość z określonego zakresu.  

Można ustawić, by losowanie następowało **cyklicznie** lub **tylko raz**.

- **Min** – minimalna możliwa wartość.  
- **Max** – maksymalna możliwa wartość.  
- **Continuous** – jeśli zaznaczone, sterownik losuje nową wartość co określony czas.  
- **Delta** – odstęp czasowy (w sekundach) między kolejnymi losowaniami.  
- **Randomize (wyzwalacz)** – po aktywacji natychmiast losuje nową wartość.

Randomizer świetnie nadaje się do wprowadzania nieprzewidywalnych zmian — np. subtelnych fluktuacji głośności lub tempa, które dodają naturalności i “życia” do odtwarzania.

## Fade In/Out

{{< figure src="provider_fadeinout.jpg" caption="Rys. 4 – Sterownik Fade In/Out." class="docs-img" >}}

Sterownik **Fade In/Out** automatycznie pogłaśnia lub wycisza utwór na jego początku i końcu.  
Po podłączeniu do głośności utworu spowoduje on płynne narastanie dźwięku przy starcie i stopniowe wyciszanie przy zakończeniu.

- **Fade In** – długość od początku utworu (w sekundach), w której głośność rośnie od 0 do wcześniej ustawionej.  
- **Fade Out** – długość od końca utworu (w sekundach), w której głośność maleje do zera.

## Crossfade

{{< figure src="provider_crossfade.jpg" caption="Rys. 5 – Sterownik Crossfade." class="docs-img" >}}

Sterownik **Crossfade** umożliwia płynne przejścia między kilkoma **zestawami utworów**. Sterownik posiada wiele wyjść (A, B, C...), co pozwala tworzyć przejścia pomiędzy różnymi zestawami. Do każdego wyjścia może być podłączone więcej niż jeden utwór, tworząc "zestaw".

Podczas przejścia wybrany zestaw jest podgłaśniany, a pozostałe zestawy wyciszane. Dzięki temu zmiany muzyki są płynne i niemal niezauważalne.

- **Length** – długość przejścia (w sekundach).  
- **Fade to A, B, C... (wyzwalacze)** – po ich aktywacji następuje przejście do wybranego zestawu utworów, wyciszając pozostałe.

## Przykłady

Wiele przykładów użycia zdarzeń i sterowników opisujemy na naszym **[blogu](blog/)**. 

Zajrzyj tam, by zobaczyć, jak można je kreatywnie wykorzystać w praktyce i jak ułatwiają tworzenie płynnych, dynamicznych scen dźwiękowych.

# Masz pytania?

{{< docs-contact >}}
