---
title: "Sterowniki"
description: "Prosty sposób na automatyczną zmianę parametrów utworu."
weight: 37
---

## Czym są sterowniki?

**Sterowniki** (ang. *Controller*) to elementy automatycznie sterujące parametrami utworów.  

Umożliwiają one zmianę parametrów utwory w sposób zautomatyzowany, regując na zdarzenia lub wyzwalacze utworów.

Każdy sterownik posiada jedno lub więcej **wyjść**, które można łączyć z parametrami utworu (głośność / prędkość).

Dostępne rodzaje sterowników:
- **Fixed Value** - ustawia zadaną wartość w przeciągu określonego czasu.
- **Randomizer** - losuje wartość.
- **Fade In/Out** - stopniowo pogłaśnia i wycisza utwór.
- **Crossfade** - pozwala na płynne przejścia pomiędzy utworami.

## Jak działają sterowniki?

Sterowniki kontrolują parametry utwory (głośność / prędkość) automatycznie. 

**UWAGA:** Jeśli sterownik połączony jest z parametrem utworu, to nie można bezpośrednio zmienić tego parametru, ponieważ jest kontrolowany przez sterownik. Ostatnia wartość ustawiona przez użytkownika będzie oznaczona pionową kreską na pasku wartości danego parametru. Niektóre sterowniki (np. crossfade) potrafią dostosować się do wartości ustawionej przez użytkownika i zmiana parametrów utworu, gdy podpięty jest sterownik, przyniesie oczekiwane zmiany.

{{< figure src="connected_provider.jpg" caption="Rys. 1 - Sterownik połączony z parametrem utworu." class="docs-img" >}}

## Fixed Value

{{< figure src="provider_fixed.jpg" caption="Rys. 2 - Sterownik Fixed Value." class="docs-img" >}}

Sterownik ten ma kilka indeksów (1, 2, 3, ...), pomiędzy którymi można się przełączać. Pole z lewej strony oznacza wartość danego indeksu, pole z prawej czas przejścia, po którym dana wartość zostanie osiągnięta.

- **1, 2, 3** - indeksy z polami: wartość (0.0 - 2.0) i czas przejścia (w sekundach).
- **Using index** - numer indeksu, który jest obecnie używany.
- **Use Index 1 (wyzwalacz)** - wyzwalacz, który przełącza na pierwszy indeks.
- **Use Index 2 (wyzwalacz)** - wyzwalacz, który przełącza na drugi indeks.
- **Use Index 3 (wyzwalacz)** - wyzwalacz, który przełącza na trzeci indeks

## Randomizer

{{< figure src="provider_randomizer.jpg" caption="Rys. 3 - Sterownik Randomizer." class="docs-img" >}}

Randomizer losuje wartość pomiędzy min - max. Można go ustawić, żeby losował wartość co określony czas, lub tylko raz.

- **Min** - minimalna wartość wylosowanej liczby.
- **Max** - maksymalna wartość wylosowanej liczby.
- **Continous** - jeśli to pole jest zaznaczone, sterownik losuję liczbę co **Delta** sekund.
- **Delta** - ilość czasu (w sekundach) po którym zostanie wylosowana kolejna liczba.
- **Randomize (wyzwalacz)** - jeśli zostanie aktywowany, natychmiast zostanie wylosowana nowa liczba.

Randomizera można używać, aby wprowadzić elementy losowe podczas odtwarzania np. losową zmianę prędkości utworu, wprowadzając nieco chaosu do odtwarzania.

## Fade In/Out

{{< figure src="provider_fadeinout.jpg" caption="Rys. 4 - Sterownik Fade In/Out." class="docs-img" >}}

Fade In/Out należy używać do automatycznego pogłaśniania / wyciszania utworu, podczas jego rozpoczynania i kończenia. Jeśli podłączymy ten sterownik do głośności utworu, to stopniowo się pogłośni podczas rozpoczęcia, a przy zakończeniu będzie stopniowo się wyciszał.

- **Fade In** - długość od początku utworu, przez które będzie się pogłaśniał od zera.
- **Fade Out** - długość od końca utworu, przez które będzie się on wyciszał do zera.

## Crossfade

{{< figure src="provider_crossfade.jpg" caption="Rys. 5 - Sterownik Crossfade." class="docs-img" >}}

Crossfade zapewnia płynne przejście pomiędzy kilkoma utworami: jeden z nich się stopniowo wycisza, a drugim w tym czasie pogłaśnia. Dzięki temu przejścia pomiędzy utworami są płynne i niemal niezauważalne. 

Sterownik ten ma wiele wyjść, dzięki czemu można tworzyć przejścia pomiędzy wieloma zestawami utworów.

- **Length** - długość przejścia w sekundach.
- **Fade to A, B, C... (wyzwalacze)** - po ich aktywacji następuje przejście do danego zestawu, wyciszając wszystkie inne.

## Przykłady

Wiele przykładów użycia sterowników opisujemy na naszym **[blogu](blog/)**. Zajrzyj tam, aby zobaczyć jak sterowniki są używane w praktyce i aby zaczerpnąć inspirację dla własnych, kreatywnych rozwiązań.

# Masz pytania?

{{< docs-contact >}}
